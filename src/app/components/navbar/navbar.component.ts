import { Component,Inject, PLATFORM_ID, ViewEncapsulation  } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Listen for navigation changes to update login status
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.checkLoginStatus());
  }

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');
      this.isLoggedIn = !!token;
    }
  }

  goToAddProduct(event: Event) {
    event.preventDefault();
    this.router.navigate(['components/product']);
  }

  goToBuyerpage(event: Event) {
    event.preventDefault();
    this.router.navigate(['components/buyer']);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }
}