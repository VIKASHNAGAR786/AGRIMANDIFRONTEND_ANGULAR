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

@Component({
  selector: 'app-sidebar',
  standalone: true, // Set to true if you're using standalone components
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn = false;
  sidebarVisible = true;
  isCollapsed = false;
  selectedColor = '';

  // Core navigation links
  coreLinks = [
  { label: 'Dashboard', path: '/', icon: 'bi bi-house-door-fill' },
  { label: 'Products', path: '/products', icon: 'bi bi-box-seam' },
  { label: 'Farmers', path: '/farmers', icon: 'bi bi-people-fill' },
  { label: 'Buyers', path: '/buyer', icon: 'bi bi-person-badge-fill' },
  { label: 'Orders', path: '/orders', icon: 'bi bi-bag-check-fill' },
  { label: 'Payments', path: '/payments', icon: 'bi bi-cash-stack' },
  { label: 'Reports', path: '/reports', icon: 'bi bi-clipboard-data-fill' },
  { label: 'Help Center', path: '/help-center', icon: 'bi bi-info-circle-fill' },
  { label: 'Settings', path: '/settings', icon: 'bi bi-gear-fill' },
];


  // Upcoming/future modules
  futureLinks = [
  { label: 'Chat with Farmer/Buyer', icon: 'bi bi-chat-dots-fill', badge: 'Planned', badgeClass: 'bg-yellow-500 text-black' },
  { label: 'Leaf Disease Detection', icon: 'bi bi-eye-fill', badge: 'Beta Soon', badgeClass: 'bg-gray-500 text-white' },
  { label: 'Logistics Tracking', icon: 'bi bi-truck-front-fill', badge: 'Planned', badgeClass: 'bg-yellow-500 text-black' },
  { label: 'AI Crop Recommendation', icon: 'bi bi-cpu-fill', badge: 'In Design', badgeClass: 'bg-gray-500 text-white' },
  { label: 'User Audit Logs', icon: 'bi bi-clock-history', badge: 'Admin', badgeClass: 'bg-pink-500 text-white' }
];


  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private colorService: ColorserviceService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    // Update selected theme color
    this.colorService.selectedColor$.subscribe((color) => {
      this.selectedColor = color;
    });

    // Detect login status
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          this.isLoggedIn = !!localStorage.getItem('token');
        }
      });
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    this.layoutService.toggleSidebar();
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }
}
