import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductByID } from '../../../models/product';
import { MessageToFarmerModel, UserRoleDto } from '../../../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { MessageService } from '../../../services/message.service';
import { NotificationService } from '../../../services/notification.service';
import { ProductService } from '../../../services/product.service';
import { UserinfowithloginService } from '../../../services/userinfowithlogin.service';
import { environment } from '../../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-product-view',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './single-product-view.component.html',
  styleUrl: './single-product-view.component.css'
})
export class SingleProductViewComponent {
  private BASE_URL = environment.BASE_URL;
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

  selectedproduct: ProductByID | null = null;
  loading: boolean = true;
  showContactForm = false;
  farmermail_for_contact: string | null = null;
  activeTab: string = 'overview';
  message: MessageToFarmerModel = {
    farmerid: 0,
    BuyerId: 0,
    MessageText: '',
    RelatedProductId: 0
  };

  ngOnInit() {
    this.checkAndLoadData(); // Using the extracted method directly
  }

  checkAndLoadData() {
    this.route.params.subscribe(params => {
      const productId = params['productid'];
      if (productId) {
        this.loadProductDetails(+productId);
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

  public async sendMessage() {
    await this.notificationservice.GetUserRole().subscribe({
      next: async (response) => {
        const userRole = response.data as UserRoleDto;
        let buyerid = 0;
        if (userRole.role === 'BUYER') {
          buyerid = userRole.roleid;
        } else if (userRole.role === 'FARMER') {
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

  goBackToList(): void {
    this.router.navigate(['/products']);
  }
  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
  }
  buyProduct(): void {
    this.router.navigate(['/product-buy']);
  }


  // tab definitions (easy to add/remove later)
  tabs = [
    { id: 'overview', label: 'Overview', icon: 'bi-box-seam' },
    { id: 'farming', label: 'Farming', icon: 'bi-seedling' },
    { id: 'farmer', label: 'Farmer', icon: 'bi-person-badge' }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
