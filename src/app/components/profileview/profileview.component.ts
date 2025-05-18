import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UserByproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';
import { BuyerById, BuyerByIdForProfile, Farmer, FarmerDTO, UpdateBuyer } from '../../models/User';
import { AlertService } from '../../services/alert.service';
import { ColorserviceService } from '../../services/colorservice.service';

@Component({
  selector: 'app-profileview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {
  profileImageUrl: string = '';  // Variable to hold the profile image URL
  defaultProfileImage: string = 'images/profile.jpeg'; // Path to your default image
  products1: UserByproduct[] = ([]);
  //buyerdata: BuyerById | null = null;
  buyerData: BuyerByIdForProfile = {
    isVerified: false,
    alternateContact: '',
    emailVerified: false,
    phoneVerified: false,
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    geoLat: 0,
    geoLong: 0,
    companyName: '',
    companyType: '',
    gstNumber: '',
    panNumber: '',
    preferredCrops: '',
    budgetRange: '',
    purchaseFrequency: '',
    preferredPaymentMethod: '',
    lastPurchaseDate: '',
    totalOrders: 0,
    totalSpent: 0,
    loyaltyPoints: 0,
    buyerRating: 0,
  };
  buyerid : number = 0;
  loginData: any = {
    isLoggedIn: false,
    userName: '',
    userRole: '',
    userEmail: '',
    userid: 0
  };

  constructor(
    private router: Router,
    private productService: ProductService,
    private userService: UserService,
    private alertService: AlertService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private colorService: ColorserviceService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.Collectlogindata());
  }

  isLoggedIn: boolean = false;
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
    phoneNumber: '',
    address: '',
    state: '',
    district: '',
    village: '',
    postalCode: '',
    landArea: 0,
    farmingType: 'Conventional',
    farmerId: 0
  };
  
  farmerData: FarmerDTO = {
name:'',
email:'',
phoneNumber:'',
address:'',
state:'',
district:'',
village:'',
postalCode:'',
landArea:0,
farmingType:'',
status:'',
  };
  
  submitFarmerForm() {
    const email = this.loginData.userEmail;
    const name = this.loginData.userName;
    const userId = Number(this.loginData.userid); // Ensure it's an integer
  
    if (email && name && userId) {
      this.userService.getFarmerId(email, name).subscribe({
        next: (response) => {
          this.farmerForm.farmerId = Number(response); // Adjust key to match your backend
          const farmerPayload = {
            ...this.farmerForm,
            userId: userId,
          };
          this.userService.saveFarmer(farmerPayload).subscribe({
            next: (res) => {
              if (res.success) {
                this.alertService.handleBackendResponse(res); // ✅ "Farmer data saved successfully!"
    } else {
      alert("Unexpected response");
    }
              if (res.success) {
                this.alertService.handleBackendResponse(res); // ✅ "Farmer data saved successfully!"
    } else {
      alert("Unexpected response");
    }
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
 selectedColor: string = ''; // default
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.loginData) {
        if (this.loginData.userRole === 'FARMER') {
          this.fetchFarmerData();
        } else if (this.loginData.userRole === 'BUYER') {
          this.fetchbuyer_id();
        }
  
        const userId = Number(localStorage.getItem('nameid'));
        if (userId) {
          this.getProfileImage(userId);
        }
      }
      this.colorService.selectedColor$.subscribe(color => {
  this.selectedColor = color;
});
    }
  }
  
  fetchbuyer_id(): void {
    this.userService.Getbuyerid(this.loginData.userid).subscribe({
      next: (data) => {
        this.buyerid = data;
        console.log('✅ Buyer ID retrieved:', this.buyerid);
  
        if (this.buyerid) {
          this.fetchBuyerData();
        } else {
          console.error('❌ Buyer ID is null or undefined');
        }
      },
      error: (err) => {
        console.error('Error fetching buyer ID:', err);
      }
    });
  }
  
  fetchBuyerData(): void {
    this.userService.GetBuyerById(this.buyerid).subscribe({
      next: (data) => {
        this.buyerData = data;
        console.log('✅ Buyer data retrieved:', this.buyerData);
      },
      error: (err) => {
        console.error('Error fetching buyer data:', err);
      }
    });
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

  
  saveProfileImage(file: File) {
    if (isPlatformBrowser(this.platformId)) {
    const UserId = parseInt(localStorage.getItem('nameid') || '0'); // Get userId from localStorage
    if (UserId !== 0 && file) {
      this.userService.uploadProfileImage(file, UserId).subscribe({
        next: (res) => {
          if (res.success) {
            console.log('Profile image saved successfully.');
            this.getProfileImage(UserId);  // Reload profile image after saving
          } else {
            console.error('Failed to save profile image.');
          }
        },
        error: (err) => {
          console.error('Error saving profile image:', err);
        }
      });
    } else {
      console.error('User ID is invalid or no file selected.');
    }
  }
  }
  
  // Method to get the profile image from the server
  getProfileImage(userId: number) {
    this.userService.getProfileImage(userId).subscribe({
      next: (blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.profileImageUrl = reader.result as string;  // Set the profile image URL
        };
        reader.readAsDataURL(blob);  // Convert the image Blob to a Data URL
      },
      error: (err) => {
        console.error('Error fetching profile image:', err);
        this.profileImageUrl = this.defaultProfileImage;  // Set default image if error occurs
      }
    });
  }
  
  // Optional: You can use this method to handle file upload from a file input
  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.saveProfileImage(file);  // Call method to save profile image
    }
  }
  
}
