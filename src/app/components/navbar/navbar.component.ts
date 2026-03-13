import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ColorserviceService } from '../../services/colorservice.service';
import { LayoutService } from '../../services/layout.service';
import { UserService } from '../../services/user.service';
import { SignalrService } from '../../services/signalr.service';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';
import { AgrimandiSearchService } from '../../services/agrimandi-search.service';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

interface SearchSuggestion {
  type: 'Products' | 'Farmers' | 'Buyers' | 'Categories';
  label: string;
  icon: string;
}

interface ProfileMenuItem {
  label: string;
  icon: string;
  routerLink?: string;
  action?: () => void;
  showIf: () => boolean;
  class?: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  isNavbarCollapsed = true;
  sidebarVisible = true;
  sidebarActive = false;
  isDesktop = true;
  mobileMenuOpen = false;
  selectedColor: string = '';
  userRole: string | null = null;
  username: string | null = null;
  showUserMenu = false;
  showNotificationMenu = false;
  profileImageUrl: string = '';
  defaultProfileImage: string = 'images/profile.jpeg';
  notificationCount = 0;
  notifications: string[] = [];

  searchQuery = '';
  searchSuggestions: SearchSuggestion[] = [];
  searchOpen = false;
  highlightedSuggestionIndex = -1;

  private readonly subscriptions = new Subscription();
  private readonly searchInput$ = new Subject<string>();
  private readonly searchDirectory: Record<SearchSuggestion['type'], string[]> = {
    Products: ['Wheat', 'Rice', 'Tomatoes', 'Potato', 'Mustard Oil', 'Onion', 'Cotton'],
    Farmers: ['Rajesh Sharma', 'Mahesh Kumar', 'Sohan Lal', 'Pooja Devi'],
    Buyers: ['Green Valley Traders', 'FreshKart Retail', 'Mandi House Buyers'],
    Categories: ['Grains', 'Vegetables', 'Fruits', 'Pulses', 'Oil Seeds']
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private colorService: ColorserviceService,
    private layoutService: LayoutService,
     private userService: UserService,
    private signalrService: SignalrService,
    private userInfo: UserinfowithloginService,
    private searchService: AgrimandiSearchService
  ) {
    this.subscriptions.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => this.checkLoginStatus())
    );
  }

  ngOnInit() {
    this.subscriptions.add(
      this.signalrService.receiveMessage().subscribe((msg) => {
        this.notifications.unshift(msg);
        this.notificationCount = this.notifications.length;
      })
    );

    this.subscriptions.add(
      this.searchInput$
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe((query) => this.buildSuggestions(query))
    );

    this.checkLoginStatus();
    this.subscriptions.add(this.colorService.selectedColor$.subscribe(color => this.selectedColor = color));
    this.subscriptions.add(this.layoutService.sidebarVisible$.subscribe(v => this.sidebarVisible = v));

    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 768;
      window.addEventListener('resize', () => {
        this.isDesktop = window.innerWidth >= 768;
      });
    }

    const userId = Number(this.userInfo.getUserId());
    if (userId) {
      this.getProfileImage(userId);
    }

    this.buildSuggestions('');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  checkLoginStatus() {
    if (isPlatformBrowser(this.platformId)) {
      this.userInfo.refresh();

      this.isLoggedIn = !!this.userInfo.getToken();
      this.userRole = this.userInfo.getUserRole();
      this.username = this.userInfo.getUserName() || 'User';
    }
  }

  goToAddProduct(event: Event) {
    event.preventDefault();
    this.showUserMenu = false;
    this.router.navigate(['/components/product']);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }

    this.userInfo.clear();
    this.isLoggedIn = false;
    this.closeAllOverlays();

    this.router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    window.dispatchEvent(new Event('toggle-sidebar'));
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    if (this.showUserMenu) {
      this.showNotificationMenu = false;
    }
  }

  toggleNotificationMenu() {
    this.showNotificationMenu = !this.showNotificationMenu;
    if (this.showNotificationMenu) {
      this.showUserMenu = false;
      this.notificationCount = 0;
    }
  }

  closeAllOverlays() {
    this.showUserMenu = false;
    this.showNotificationMenu = false;
    this.searchOpen = false;
    this.highlightedSuggestionIndex = -1;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeAllOverlays();
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: EventTarget | null) {
    if (!(targetElement instanceof HTMLElement)) {
      this.closeAllOverlays();
      return;
    }

    const clickedInsideUserDropdown = targetElement.closest('.user-dropdown') !== null;
    const clickedInsideNotification = targetElement.closest('.notification-dropdown') !== null;
    const clickedInsideSearch = targetElement.closest('.search-shell') !== null;

    if (!clickedInsideUserDropdown) {
      this.showUserMenu = false;
    }
    if (!clickedInsideNotification) {
      this.showNotificationMenu = false;
    }
    if (!clickedInsideSearch) {
      this.searchOpen = false;
      this.highlightedSuggestionIndex = -1;
    }
  }

  openSearchDropdown() {
    this.searchOpen = true;
    this.buildSuggestions(this.searchQuery);
  }

  onSearchInputChange(value: string) {
    this.searchQuery = value;
    this.searchInput$.next(value);
    this.searchOpen = true;
  }

  onSearchKeydown(event: KeyboardEvent) {
    if (!this.searchOpen || this.searchSuggestions.length === 0) {
      if (event.key === 'Escape') {
        this.searchOpen = false;
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.highlightedSuggestionIndex =
        (this.highlightedSuggestionIndex + 1) % this.searchSuggestions.length;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.highlightedSuggestionIndex =
        (this.highlightedSuggestionIndex - 1 + this.searchSuggestions.length) % this.searchSuggestions.length;
    }

    if (event.key === 'Enter' && this.highlightedSuggestionIndex >= 0) {
      event.preventDefault();
      this.selectSuggestion(this.searchSuggestions[this.highlightedSuggestionIndex]);
    }
  }

  submitSearch() {
    const query = this.searchQuery.trim();
    if (!query) {
      return;
    }

    this.searchService.setSearchQuery(query);
    this.searchOpen = false;
    this.highlightedSuggestionIndex = -1;
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchSuggestions = this.getDefaultSuggestions();
    this.searchOpen = true;
    this.highlightedSuggestionIndex = -1;
    this.searchService.setSearchQuery('');
  }

  selectSuggestion(item: SearchSuggestion) {
    this.searchQuery = item.label;
    this.searchService.setSearchQuery(item.label);
    this.searchOpen = false;
    this.highlightedSuggestionIndex = -1;
  }

  getSuggestionId(index: number): string {
    return `search-suggestion-${index}`;
  }

  get visibleNotifications(): string[] {
    return this.notifications.slice(0, 5);
  }

  onProfileMenuSelect(item: ProfileMenuItem, event: Event) {
    event.preventDefault();
    this.showUserMenu = false;
    this.mobileMenuOpen = false;

    if (item.action) {
      item.action();
      return;
    }

    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    }
  }

  private buildSuggestions(query: string) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      this.searchSuggestions = this.getDefaultSuggestions();
      this.highlightedSuggestionIndex = -1;
      return;
    }

    const iconByType: Record<SearchSuggestion['type'], string> = {
      Products: 'bi-box-seam',
      Farmers: 'bi-person-badge',
      Buyers: 'bi-briefcase',
      Categories: 'bi-tags'
    };

    const suggestions: SearchSuggestion[] = [];
    (Object.keys(this.searchDirectory) as SearchSuggestion['type'][]).forEach((type) => {
      this.searchDirectory[type]
        .filter((label) => label.toLowerCase().includes(normalized))
        .forEach((label) => {
          suggestions.push({ type, label, icon: iconByType[type] });
        });
    });

    this.searchSuggestions = suggestions.slice(0, 8);
    this.highlightedSuggestionIndex = -1;
  }

  private getDefaultSuggestions(): SearchSuggestion[] {
    const iconByType: Record<SearchSuggestion['type'], string> = {
      Products: 'bi-box-seam',
      Farmers: 'bi-person-badge',
      Buyers: 'bi-briefcase',
      Categories: 'bi-tags'
    };

    return (Object.keys(this.searchDirectory) as SearchSuggestion['type'][]).map((type) => ({
      type,
      label: this.searchDirectory[type][0],
      icon: iconByType[type]
    }));
  }

  getProfileImage(userId: number) {
    this.userService.getProfileImage(userId).subscribe({
      next: (blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.profileImageUrl = reader.result as string;
        };
        reader.readAsDataURL(blob);
      },
      error: () => {
        this.profileImageUrl = this.defaultProfileImage;
      }
    });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  profileMenuItems: ProfileMenuItem[] = [
    {
      label: 'My Profile',
      icon: 'bi-person-circle',
      routerLink: '/components/profileview',
      showIf: () => true
    },
    {
      label: 'My Products',
      icon: 'bi-box2',
      routerLink: '/components/productinventory',
      showIf: () => this.userRole === 'FARMER'
    },
    {
      label: 'Orders',
      icon: 'bi-receipt',
      routerLink: '/components/orders',
      showIf: () => true
    },
    {
      label: 'Settings',
      icon: 'bi-gear',
      routerLink: '/components/setting',
      showIf: () => true
    },
    {
      label: 'Add Product',
      icon: 'bi-plus-circle',
      action: () => this.router.navigate(['/components/product']),
      showIf: () => this.userRole === 'FARMER'
    },
    {
      label: 'Logout',
      icon: 'bi-box-arrow-right',
      action: () => this.logout(),
      showIf: () => true,
      class: 'danger'
    }
  ];

}

