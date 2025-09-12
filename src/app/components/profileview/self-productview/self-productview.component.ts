import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserByproduct } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { UserinfowithloginService } from '../../../services/userinfowithlogin.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-self-productview',
  imports: [CommonModule, FormsModule],
  templateUrl: './self-productview.component.html',
  styleUrl: './self-productview.component.css'
})

export class SelfProductviewComponent {

  constructor(
    private router: Router,
     private productService: ProductService,
      private userService: UserService,
      private alertService: AlertService,
      private userInfo: UserinfowithloginService,
      @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.Collectlogindata());
  } 
  
  ngOnInit(): void {
    // Fetch login + product data on first load also
    this.Collectlogindata();
  }

  loading: boolean = false;
  products1: UserByproduct[] = ([]);

  loginData: any = {
    isLoggedIn: false,
    userName: '',
    userRole: '',
    userEmail: '',
    userid: 0
  };
  
  Collectlogindata() {
    if (isPlatformBrowser(this.platformId)) {
      const token = this.userInfo.getToken();

      this.loginData = {
        isLoggedIn: !!token,
        userName: this.userInfo.getUserName() || '',
        userRole: this.userInfo.getUserRole() || '',
        userEmail: this.userInfo.getUserEmail() || '',
        userid: this.userInfo.getUserId() || 0
      };

      const userId = this.loginData.userid;
      const email = this.loginData.userEmail;
      const role = this.loginData.userRole;

      if (userId && email) {
        if (role === 'FARMER') {
          this.getProducts(userId, email);
        }
      }
    }
  }

  getProducts(id: number, email: string) {
  this.loading = true; // start loader
  this.productService.getProductByFarmerId(id, email).subscribe({
    next: (data) => {
      this.products1 = data;
      this.loading = false; // stop loader
    },
    error: (error) => {
      this.alertService.showAlert('Error fetching products: ', error.message);
      this.loading = false; // stop loader even on error
    }
  });
}

}
