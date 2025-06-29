import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ColorserviceService } from '../../services/colorservice.service';
import { LayoutService } from '../../services/layout.service';
import { UserService } from '../../services/user.service';
import { SignalrService } from '../../services/signalr.service';

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
  selectedColor: string = '';
  userRole: string | null = null;
  username: string | null = null;
  showUserMenu = false;
  profileImageUrl: string = '';
  defaultProfileImage: string = 'images/profile.jpeg';
  notificationCount = 0;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private colorService: ColorserviceService,
    private layoutService: LayoutService,
     private userService: UserService,
    private signalrService: SignalrService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.checkLoginStatus());
  }

  notifications: string[] = [];
  ngOnInit() {
    this.signalrService.receiveMessage().subscribe((msg) => {
  this.notifications.push(msg);
  this.notificationCount = this.notifications.length;
});
    this.checkLoginStatus();
    this.colorService.selectedColor$.subscribe(color => this.selectedColor = color);
    this.layoutService.sidebarVisible$.subscribe(v => this.sidebarVisible = v);
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 768;
      window.addEventListener('resize', () => {
        this.isDesktop = window.innerWidth >= 768;
      });
    }
     const userId = Number(localStorage.getItem('nameid'));
 if (userId) {
   this.getProfileImage(userId);
 }
  }

  checkLoginStatus() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');
      this.isLoggedIn = !!token;
      this.userRole = localStorage.getItem('user_role');
      this.username = localStorage.getItem('user_name') || 'User';
    }
  }

  goToAddProduct(event: Event) {
    event.preventDefault();
    this.showUserMenu = false;
    this.router.navigate(['components/product']);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }
  @HostListener('document:click', ['$event.target'])
onClickOutside(targetElement: HTMLElement) {
  const clickedInsideDropdown = targetElement.closest('.user-dropdown') !== null;
  if (!clickedInsideDropdown) {
    this.showUserMenu = false;
  }
}

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
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  dropdownLinks = [
  {
    label: 'Profile',
    icon: 'bi-person-circle',
    routerLink: 'components/profileview',
    showIf: () => true,
    isButton: false
  },
  {
    label: 'Add Product',
    icon: 'bi-plus-circle',
    click: (event: Event) => this.goToAddProduct(event),
    showIf: () => this.userRole === 'FARMER',
    isButton: true
  },
  {
    label: 'Logout',
    icon: 'bi-box-arrow-right',
    click: () => this.logout(),
    showIf: () => true,
    isButton: true,
    class: 'text-red-600 hover:bg-red-100'
  }
];

  
}

