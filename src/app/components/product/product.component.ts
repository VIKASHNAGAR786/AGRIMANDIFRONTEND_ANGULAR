import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder,FormGroup,Validators,AbstractControl,ValidationErrors,ReactiveFormsModule} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';
import { STATE_DISTRICT_MAP } from '../../data/state-districts';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  today: string = new Date().toISOString().split('T')[0];

  currentStep: number = 1;

  states: string[] = [];// Object.keys(this.STATE_DISTRICTS); // ['Rajasthan', 'Gujarat', ...]
  districts: string[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private alertService: AlertService,
    private userInfo: UserinfowithloginService
  ) { }

  categories = [
  'GRAINS',
  'FRUITS',
  'VEGETABLES',
  'DAIRY',
  'FLOWERS',
  'SPICES',
  'PULSES',
  'OILSEEDS',
  'HERBS',
  'OTHERS'
];

grades = [
  'STANDARD',
  'A',
  'B',
  'C',
  'ORGANIC',
  'PREMIUM'
];

units = [
  'KG',
  'QUINTAL',
  'TON',
  'LITERS',
  'PACKETS',
  'BUNCH',
  'DOZEN'
];
  loading: boolean = false;


  ngOnInit(): void {
    // ✅ Step 1: Create the form first
    this.productForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', Validators.required],
        category: ['', Validators.required],
        type: [''],
        variety: [''],
        state: [''],
        district: [''],
        grade: ['Standard'],
        quantity: [1, [Validators.required, Validators.min(1)]],
        unit: ['Kg', Validators.required],
        pricePerUnit: [0, [Validators.required, Validators.min(1)]],
        availability: [true],
        location: [''], // We’ll update this later
        harvestDate: ['', Validators.required],
        expiryDate: ['', Validators.required],
        storageCondition: [''],
        packagingType: [''],
        certification: [''],
        farmerId: [0],
        status: ['Pending'],
        imageUrl: [null], //  for files
      },
      {
        validators: this.expiryDateAfterHarvestDate('harvestDate', 'expiryDate'),
      }
    );

    // ✅ Step 2: Populate state list
    this.states = Object.keys(STATE_DISTRICT_MAP);

    // ✅ Step 3: Watch for state changes
    this.productForm.get('state')?.valueChanges.subscribe(state => {
      console.log('Selected State:', state);
      this.districts = STATE_DISTRICT_MAP[state] || [];
      this.productForm.patchValue({ district: '' });
    });
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
    const email = this.userInfo.getUserEmail();
    const name = this.userInfo.getUserName();

    if (!email || !name) {
      this.alertService.showAlert('User information missing in token!', 'error');
      return;
    }

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      this.alertService.showAlert('Please fill all required fields correctly.', 'error');
      return;
    }

    this.loading = true; // ✅ Show loader when saving starts
    this.productService.getFarmerId(email, name).subscribe({
      next: (farmerId: number) => {

        const productData = new FormData();
        productData.append('name', this.productForm.value.name);
        productData.append('description', this.productForm.value.description);
        productData.append('category', this.productForm.value.category);
        productData.append('type', this.productForm.value.type);
        productData.append('variety', this.productForm.value.variety);
        productData.append('grade', this.productForm.value.grade);
        productData.append('quantity', this.productForm.value.quantity);
        productData.append('unit', this.productForm.value.unit);
        productData.append('pricePerUnit', this.productForm.value.pricePerUnit);
        productData.append('availability', this.productForm.value.availability);
        productData.append('location', `${this.productForm.value.district}, ${this.productForm.value.state}`);
        productData.append('harvestDate', this.productForm.value.harvestDate);
        productData.append('expiryDate', this.productForm.value.expiryDate);
        productData.append('storageCondition', this.productForm.value.storageCondition);
        productData.append('packagingType', this.productForm.value.packagingType);
        productData.append('certification', this.productForm.value.certification);
        productData.append('farmerId', farmerId.toString());
        productData.append('status', 'Pending');

        // Add files (if any)
        const fileList: FileList = this.productForm.get('imageUrl')?.value;
        if (fileList && fileList.length > 0) {
          for (let i = 0; i < fileList.length; i++) {
            productData.append('files', fileList[i]);
          }
        }

        this.productService.saveproduct(productData).subscribe({
          next: (response) => {
            this.alertService.showAlert('Product added successfully!', 'success');
            this.productForm.reset({ availability: true });
            this.loading = false; // ✅ Hide loader on success
          },
          error: (err) => {
            this.alertService.showAlert('Failed to add product! Please try again.', 'error');
            this.loading = false; // ✅ Hide loader on error
          },
        });
      },
      error: (err) => {
        this.alertService.showAlert('Could not fetch Farmer ID. Please login again.', 'error');
        this.loading = false; // ✅ Hide loader on error
      },
    });
  }
  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.productForm.patchValue({ imageUrl: event.target.files });
    }
  }
  goNext() {
    if (this.currentStep < 3) this.currentStep++;
  }
  goBack() {
    if (this.currentStep > 1) this.currentStep--;
  }

}
