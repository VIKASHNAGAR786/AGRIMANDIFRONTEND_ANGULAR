import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UserByproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-profileview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profileview.component.html',
  styleUrl: './profileview.component.css'
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
  products1: UserByproduct[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
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
        userid : parseInt(localStorage.getItem('nameid') || '0')
      };

      const userId = this.loginData.userid;
      const email = this.loginData.userEmail;

      if (userId && email) {
        this.getProducts(userId, email);
      }
    }
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
