import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ColorserviceService } from '../../services/colorservice.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  isNavbarCollapsed = true;
  sidebarVisible = true;
  isDesktop = true;
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object, private colorService: ColorserviceService,
    private layoutService: LayoutService
  ) {
    // Listen for navigation changes to update login status
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.checkLoginStatus());
  }
  selectedColor: string = ''; // default

  ngOnInit() {
    this.checkLoginStatus();
    this.colorService.selectedColor$.subscribe(color => {
      this.selectedColor = color;
    });

    this.layoutService.sidebarVisible$.subscribe(v => this.sidebarVisible = v);

    // Detect screen size
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 768;
      window.addEventListener('resize', () => {
        this.isDesktop = window.innerWidth >= 768;
      });
    }
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

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('nav');
    if (!clickedInside && this.isNavbarCollapsed) {
      this.isNavbarCollapsed = false;
    }
  }

}