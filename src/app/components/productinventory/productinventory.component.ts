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
    this.loadAllProducts();
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




  buyProduct(): void {
    this.router.navigate(['/product-buy']);
  }

  contactMessage: string = '';

}
