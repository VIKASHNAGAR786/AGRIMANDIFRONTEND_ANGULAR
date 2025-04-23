import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserByproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { Farmer, FarmerDTO, UpdateBuyer } from '../../models/User';

@Component({
  selector: 'app-profileview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent {
  loginData: any = {
    isLoggedIn: false,
    userName: '',
    userRole: '',
    userEmail: '',
    userid: 0
  };
  isLoggedIn: boolean = false;
  products1: any[] = [];
  showBuyerForm: boolean = false;

  buyerForm: UpdateBuyer = {
    user_id: 0,
    contactNumber: '',
    alternateContact: '',
    emailVerified: true,
    phoneVerified: false,
    address: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    geoLat: 0,
    geoLong: 0,
    companyName: '',
    companyType: '',
    gstNumber: '',
    panNumber: '',
    isVerified: false,
    preferredCrops: '',
    budgetRange: '',
    purchaseFrequency: '',
    preferredPaymentMethod: '',
    lastPurchaseDate: new Date(),
    totalOrders: 0,
    totalSpent: 0,
    loyaltyPoints: 0,
    buyerRating: 5.0
  };

  farmerForm: Farmer = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    state: '',
    district: '',
    village: '',
    postalCode: '',
    landArea: 0,
    farmingType: 'Conventional',
    status:''
  };
  
  farmerData: FarmerDTO = {
Name:'',
Email:'',
PhoneNumber:'',
Address:'',
State:'',
District:'',
Village:'',
PostalCode:'',
LandArea:0,
FarmingType:'',
registrationDate:new Date(),
status:'',
  };
  
  submitFarmerForm() {
    const email = this.loginData.userEmail;
    const name = this.loginData.userName;
    const userId = Number(this.loginData.userid); // Ensure it's an integer
  
    if (email && name && userId) {
      this.userService.getFarmerId(email, name).subscribe({
        next: (response) => {
          const farmerId = Number(response?.farmerId || response?.id); // Adjust key to match your backend
  
          const farmerPayload = {
            ...this.farmerForm,
            userId: userId,
            farmerId: farmerId
          };
  
          this.userService.saveFarmer(farmerPayload).subscribe({
            next: (res) => {
              console.log('Farmer saved successfully:', res);
              alert('Farmer data saved!');
            },
            error: (err) => {
              console.error('Error saving farmer:', err);
              alert('Error saving farmer data');
            }
          });
        },
        error: (err) => {
          console.error('Error fetching farmer ID:', err);
          alert('Could not fetch farmer ID');
        }
      });
    } else {
      alert('User information is missing. Please login again.');
    }
  }
  
 
  


  fetchFarmerData() {
    this.userService.getFarmerData().subscribe({
      next: (data) => {
        this.farmerData = data;
        console.log('Farmer data retrieved:', this.farmerData);
      },
      error: (err) => {
        console.error('Error fetching farmer data:', err);
      }
    });
  }
  ngOnInit(): void {
    if (this.loginData?.userRole === 'FARMER') {
      this.fetchFarmerData();
    }
  }
  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.Collectlogindata());
  }

  Collectlogindata() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');

      this.loginData = {
        isLoggedIn: !!token,
        userName: localStorage.getItem('user_name') || '',
        userRole: localStorage.getItem('user_role') || '',
        userEmail: localStorage.getItem('user_email') || '',
        userid: parseInt(localStorage.getItem('nameid') || '0')
      };

      const userId = this.loginData.userid;
      const email = this.loginData.userEmail;
      const role = this.loginData.userRole;

      if (userId && email) {
        if (role === 'FARMER') {
          this.getProducts(userId, email);
          this.fetchFarmerData();  // Add this line
        }
        this.buyerForm.user_id = userId; // set default
      }
    }
  }

  openBuyerForm() {
    this.showBuyerForm = true;
  }

  submitBuyerForm() {
    this.userService.registerAsBuyer(this.buyerForm).subscribe({
      next: (res) => {
        console.log('Buyer registered successfully:', res);
        alert('You are now registered as a Buyer!');
        this.showBuyerForm = false;
      },
      error: (err) => {
        console.error('Error registering buyer:', err);
        alert('Error registering buyer');
      }
    });
  }

  getProducts(id: number, email: string) {
    this.productService.getProductByFarmerId(id, email).subscribe({
      next: (data) => {
        this.products1 = data;
        console.log('Products fetched:', this.products1);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }
}
