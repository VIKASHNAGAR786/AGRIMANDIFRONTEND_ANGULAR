import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  today: string = new Date().toISOString().split('T')[0];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private alertService: AlertService
  ) {}

  
  categories = ['Grains', 'Fruits', 'Vegetables', 'Dairy', 'Flowers', 'Spices', 'Pulses', 'Oilseeds', 'Herbs', 'Others'];
  grades = ['Standard', 'A', 'B', 'C', 'Organic', 'Premium'];
  units = ['Kg', 'Quintal', 'Ton', 'Liters', 'Packets', 'Bunch', 'Dozen'];
  ngOnInit(): void {
    this.productForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', Validators.required],
        category: ['', Validators.required],
        type: [''],
        variety: [''],
        grade: ['Standard'],
        quantity: [1, [Validators.required, Validators.min(1)]],
        unit: ['Kg', Validators.required],
        pricePerUnit: [0, [Validators.required, Validators.min(1)]],
        availability: [true],
        location: ['', Validators.required],
        harvestDate: ['', Validators.required],
        expiryDate: ['', Validators.required],
        storageCondition: [''],
        packagingType: [''],
        certification: [''],
        imageUrl: [''],
        farmerId: [0],
        status: ['Pending'],
      },
      {
        validators: this.expiryDateAfterHarvestDate('harvestDate', 'expiryDate'),
      }
    );
  }

  expiryDateAfterHarvestDate(harvestKey: string, expiryKey: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const harvestDate = group.get(harvestKey)?.value;
      const expiryDate = group.get(expiryKey)?.value;

      if (harvestDate && expiryDate) {
        const harvest = new Date(harvestDate);
        const expiry = new Date(expiryDate);
        return expiry >= harvest ? null : { expiryBeforeHarvest: true };
      }
      return null;
    };
  }

  get f() {
    return this.productForm.controls;
  }

  submitProduct(): void {
    const email = localStorage.getItem('user_email');
    const name = localStorage.getItem('user_name');

    if (!email || !name) {
      this.alertService.showAlert('User information missing in token!', 'error');
      return;
    }

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.alertService.showAlert('Please fill all required fields correctly.', 'error');
      return;
    }

    this.productService.getFarmerId(email, name).subscribe({
      next: (farmerId: number) => {
        const productData = {
          ...this.productForm.value,
          farmerId,
          status: 'Pending',
        };

        this.productService.saveproduct(productData).subscribe({
          next: (response) => {
            console.log('✅ Product registered:', response);
            this.alertService.showAlert('Product added successfully!', 'success');
            this.productForm.reset({ availability: true });
          },
          error: (err) => {
            console.error('❌ Failed to save product:', err);
            this.alertService.showAlert('Failed to add product! Please try again.', 'error');
          },
        });
      },
      error: (err) => {
        console.error('❌ Failed to get Farmer ID:', err);
        this.alertService.showAlert('Could not fetch Farmer ID. Please login again.', 'error');
      },
    });
  }
}
