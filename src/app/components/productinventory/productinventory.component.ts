import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Product, ProductByID, ProductFilter } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { environment } from '../../../environments/environment';
import { AlertComponent } from '../../components/alert/alert.component';
import { MessageToFarmerModel, UserRoleDto } from '../../models/User';
import { MessageService } from '../../services/message.service';
import { NotificationService } from '../../services/notification.service';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';

@Component({
  selector: 'app-productinventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productinventory.component.html',
  styleUrls: ['./productinventory.component.css']
})
export class ProductinventoryComponent implements OnInit {
  products: Product[] = [];
  selectedproduct: ProductByID | null = null;
  filterForm: ProductFilter = {
    Name: '',
    Category: '',
    Location: '',
    MinPrice: null,
    MaxPrice: null,
    Availability: null

  };
  private BASE_URL = environment.BASE_URL;
  loading: boolean = true;
  showContactForm = false;
  farmermail_for_contact: string | null = null;

message: MessageToFarmerModel = {
    farmerid: 0,
    BuyerId: 0,
    MessageText: '',
    RelatedProductId: 0
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private alertService: AlertService,
    private messageService: MessageService,
    private notificationservice: NotificationService,
    private userInfo: UserinfowithloginService
  ) { }

  ngOnInit() {
    this.checkAndLoadData(); // Using the extracted method directly
  }
  resetFilters(): void {
    this.filterForm = {
      Name: '',
      Category: '',
      Location: '',
      Availability: null,
      MinPrice: null,
      MaxPrice: null
    };
    this.loadAllProducts(this.filterForm);
  }
  checkAndLoadData() {
    this.route.params.subscribe(params => {
      const productId = params['productid'];
      if (productId) {
        this.loadProductDetails(+productId);
      } else {
        this.loadAllProducts();
      }
    });
  }

  loadProductDetails(productId: number): void {
    this.loading = true;
    this.productService.GetProductById(productId).subscribe({
      next: (data: ProductByID) => {
        this.loading = false;

        if (data.imageUrl != null) {
          console.log('📦 Product details loaded: before', data);
          data.imageUrl = `${this.BASE_URL}${data.imageUrl}`;
        }


        this.selectedproduct = data || null;
        this.products = [];
        this.farmermail_for_contact = data.farmerEmail || null;

        console.log('📦 Product details loaded:', this.selectedproduct);
      },
      error: (error) => {
        this.loading = false;
        this.selectedproduct = null;
        this.alertService.showAlert('❌ Error loading product details:', error);
      }
    });
  }

  // component.ts
  loadAllProducts(filter: ProductFilter | null = null): void {
    this.loading = true;
    this.productService.GetAllProduct(filter || undefined).subscribe({
      next: (data: Product[]) => {
        this.products = data.map(product => ({
          productid: product.productid,
          name: product.name,
          description: product.description,
          category: product.category,
          type: product.type,
          variety: product.variety,
          grade: product.grade,
          quantity: product.quantity,
          unit: product.unit,
          pricePerUnit: product.pricePerUnit,
          totalPrice: product.totalPrice,
          availability: product.availability,
          location: product.location,
          harvestDate: product.harvestDate,
          expiryDate: product.expiryDate,
          storageCondition: product.storageCondition,
          packagingType: product.packagingType,
          certification: product.certification,
          imageUrl: product.imageUrl ? `${this.BASE_URL}/ProductImages/${product.imageUrl}` : undefined,
          farmerId: product.farmerId,
          addedDate: product.addedDate,
          updatedDate: product.updatedDate,
          status: product.status
        }));

        this.loading = false;
        this.selectedproduct = null;
      },
      error: (err) => {
        this.loading = false;
        this.alertService.showAlert('❌ Error fetching products: Please Login first', 'error');
      }
    });
  }


  viewDetails(product: Product): void {
    this.router.navigate(['products', product.productid]);
  }

  goBackToList(): void {
    this.router.navigate(['/products']);
  }
public async sendMessage() {
 await this.notificationservice.GetUserRole().subscribe({
    next: async (response) => {
      const userRole = response.data as UserRoleDto;
      let buyerid = 0;
      if (userRole.role === 'BUYER') {
        buyerid = userRole.roleid;
      }else if (userRole.role === 'FARMER') {
        buyerid = userRole.roleid;
        await this.alertService.showAlert('You are a farmer, you cannot send messages to Farmers.', 'error');
        return; // Exit if the user is a farmer
      }

      const id = Number(this.userInfo.getUserId());
      this.message.BuyerId = id;
      this.message.farmerid = this.selectedproduct?.userId || 0;
      this.message.RelatedProductId = this.selectedproduct?.productid || 0;

      // Move message sending inside the success block after setting values
      (await this.messageService.ContactFarmer(this.message)).subscribe({
        next: (response) => {
          this.alertService.showAlert('Message sent successfully!', 'success');
          this.message.MessageText = ''; // Clear the message input after sending
        },
        error: (error) => {
          this.alertService.showAlert('Error sending message:', error);
        }
      });
    },
    error: (error) => {
      this.alertService.showAlert('Error fetching user role:', error);
    }
  });
}


  buyProduct(product: Product | ProductByID): void {
    console.log('🛒 Buying product:', product);
  }
  viewProductPdf(productId: number): void {
    this.productService.getProductPdf(productId).subscribe({
      next: (pdfBlob) => {
        const blob = new Blob([pdfBlob], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        // Open PDF in a new tab
        window.open(url, '_blank', 'noopener');

        // Optional: Revoke URL after a delay (for memory cleanup)
        setTimeout(() => URL.revokeObjectURL(url), 5000);
      },
      error: (err) => {
        this.alertService.showAlert('Failed to load PDF:', err);
        this.alertService.showAlert('unable to open pdf please try again', 'error');
      }
    });
  }
  contactMessage: string = '';

  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
  }

}
  