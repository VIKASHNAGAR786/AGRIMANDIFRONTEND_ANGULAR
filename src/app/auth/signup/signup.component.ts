import { Component } from '@angular/core';
import { FarmerService } from '../../services/signup.service';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../components/alert/alert.component';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [FormsModule, AlertComponent],
})
export class SignupComponent {
  farmer = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    state: '',
    district: '',
    village: '',
    postalCode: '',
    landArea: 0,
    farmingType: '',
  };

  constructor(private farmerService: FarmerService, private alertService: AlertService) {}
  signup() {
    this.farmerService.saveFarmer(this.farmer).subscribe(
      (response) => {
        console.log('✅ Farmer registered:', response);
        this.alertService.showAlert('Signup successful!', 'success');
      },
      (error) => {
        console.error('❌ Signup failed:', error);
        this.alertService.showAlert('Signup failed! Please try again.', 'error');
      }
    );
  }
  field = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Phone Number', name: 'phoneNumber', type: 'text' },
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'State', name: 'state', type: 'text' },
    { label: 'District', name: 'district', type: 'text' },
    { label: 'Village', name: 'village', type: 'text' },
    { label: 'Postal Code', name: 'postalCode', type: 'text' },
    { label: 'Land Area (in acres)', name: 'landArea', type: 'number' },
    { label: 'Farming Type', name: 'farmingType', type: 'text' }
  ];
  
  testSuccess() {
    this.alertService.showAlert('Test success alert!', 'success');
  }

  testError() {
    this.alertService.showAlert('Test error alert!', 'error');
  }
}
