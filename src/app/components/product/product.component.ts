import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../components/alert/alert.component';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [FormsModule, AlertComponent],
})
export class ProductComponent {
 product = { 
  name: '',
 description: '',
 category: '',
 type: '',
 variety : '',
 grade: '',
 quantity: 0,
 unit: '',
 pricePerUnit: 0,
 availability: true,
 location: '',
 harvestDate: '',
 expiryDate: '',
 storageCondition: '',
 packagingType: '',
 certification: '',
 imageUrl: '',
 farmerId: 0,
 status: '',
 }

  constructor(private ProductService: ProductService, private alertService: AlertService) {}
  signup() {
    const email = localStorage.getItem('user_email');
    const name = localStorage.getItem('user_name');

    if (!email || !name) {
      this.alertService.showAlert('User information missing in token!', 'error');
      return;
    }

    // Step 1: Get Farmer ID using email and name
    this.ProductService.getFarmerId(email, name).subscribe(
      (farmerId: number) => {
        this.product.farmerId = farmerId;

        // Step 2: Now save the product
        this.ProductService.saveproduct(this.product).subscribe(
          (response) => {
            console.log('✅ Product registered:', response);
            this.alertService.showAlert('Product Added successfully!', 'success');
          },
          (error) => {
            console.error('❌ Failed to save product:', error);
            this.alertService.showAlert('Failed to add product! Please try again.', 'error');
          }
        );
      },
      (error) => {
        console.error('❌ Failed to get Farmer ID:', error);
        this.alertService.showAlert('Could not fetch Farmer ID. Please login again.', 'error');
      }
    );
  }

  testSuccess() {
    this.alertService.showAlert('Test success alert!', 'success');
  }

  testError() {
    this.alertService.showAlert('Test error alert!', 'error');
  }
}
