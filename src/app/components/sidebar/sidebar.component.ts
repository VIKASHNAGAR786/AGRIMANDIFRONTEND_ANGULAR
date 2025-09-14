import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ColorserviceService } from '../../services/colorservice.service';
import { LayoutService } from '../../services/layout.service';
import path from 'path';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  standalone: true, // Set to true if you're using standalone components
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  sidebarVisible = true;
  selectedColor = '';
  toggleHandler: any;

  // Core navigation links
  coreLinks = [
  { label: 'SIDEBARMENU.HOME', path: '/', icon: 'bi bi-house-door-fill' },
  { label: 'SIDEBARMENU.MANDI_RATES', path: '/mandi-rates', icon: 'bi bi-graph-up' },
  { label: 'SIDEBARMENU.PRODUCTS', path: '/products', icon: 'bi bi-box-seam' },
  { label: 'SIDEBARMENU.CHAT', path: '/messages', icon: 'bi bi-chat-dots-fill' },
  // { label: 'SIDEBARMENU.GOVT_SCHEMES', path: '/govt-schemes', icon: 'bi bi-bank' },
  { label: 'SIDEBARMENU.BUYERS', path: '/buyer', icon: 'bi bi-person-badge-fill' },
  { label: 'SIDEBARMENU.SETTINGS', path: '/settings', icon: 'bi bi-gear-fill' },
  { label: 'SIDEBARMENU.ORDERS', path: '/orders', icon: 'bi bi-bag-check-fill' },
  { label: 'SIDEBARMENU.PAYMENTS', path: '/payments', icon: 'bi bi-cash-stack' },
  { label: 'SIDEBARMENU.REPORTS', path: '/reports', icon: 'bi bi-clipboard-data-fill' },
  { label: 'SIDEBARMENU.HELP', path: '/help-center', icon: 'bi bi-info-circle-fill' }
];


  // Upcoming/future modules
  futureLinks = [
  { label: 'Leaf Disease Detection', icon: 'bi bi-eye-fill', badge: 'Beta Soon', badgeClass: 'bg-gray-500 text-white' },
  { label: 'Logistics Tracking', icon: 'bi bi-truck-front-fill', badge: 'Planned', badgeClass: 'bg-yellow-500 text-black' },
  { label: 'AI Crop Recommendation', icon: 'bi bi-cpu-fill', badge: 'In Design', badgeClass: 'bg-gray-500 text-white' },
  { label: 'User Audit Logs', icon: 'bi bi-clock-history', badge: 'Admin', badgeClass: 'bg-pink-500 text-white' }
];


  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private colorService: ColorserviceService,
    private layoutService: LayoutService,
    private userInfo: UserinfowithloginService
  ) {}
sidebarBackground: string = '#14532d'; // fallback
  ngOnInit(): void {

    //this.toggleSidebar();
    this.layoutService.sidebarVisible$.subscribe((visible) => {
    this.sidebarVisible = visible;
    this.isopenandclose = visible;
  });

  // Event listener from other component
  this.toggleHandler = () => this.layoutService.toggleSidebar();
  window.addEventListener('toggle-sidebar', this.toggleHandler);

    this.colorService.selectedColor$.subscribe((color) => {
      this.selectedColor = color;

     if (color === '#4CAF50' || color === '#8BC34A') {
      this.sidebarBackground = '#1B5E20'; // A dark green shade
    } else {
      this.sidebarBackground = color;
    }
  });
    // Detect login status
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          this.isLoggedIn = !!this.userInfo.getToken();
        }
      });
  }

  isopenandclose = false;
toggleSidebar(): void {
  this.layoutService.toggleSidebar(); // Service decides new value
}

private setSidebarState(isOpen: boolean): void {
  // Always set both flags together
  this.isopenandclose = isOpen;
  this.sidebarVisible = isOpen;

  // Notify layout service with the actual state
  this.layoutService.toggleSidebar();
}
  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }

   ngOnDestroy() {
    window.removeEventListener('toggle-sidebar', this.toggleHandler);
  }
}
