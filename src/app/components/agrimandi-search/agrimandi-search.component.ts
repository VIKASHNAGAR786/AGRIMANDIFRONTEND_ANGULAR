import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserinfowithloginService } from '../../services/userinfowithlogin.service';

type SearchItem = { label: string; path?: string; icon?: string };

@Component({
  selector: 'app-agrimandi-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agrimandi-search.component.html',
  styleUrl: './agrimandi-search.component.css'
})
export class AgrimandiSearchComponent {
  constructor(private router: Router, private userInfo: UserinfowithloginService) {
    this.allItems = [...this.otherItems, ...this.coreLinks];
    const userRole = this.userInfo.getUserRole(); // replace with your actual role from login/session
  if (userRole === 'FARMER') {
    this.coreLinks.push({
      label: 'Add Product',
      path: '/components/product',
      icon: 'bi bi-plus-circle'
    });
  }
  }

  ngOnInit(): void {
    
  }

  query: string = '';
  results: SearchItem[] = [];
  highlightedIndex: number = -1;

  coreLinks: SearchItem[] = [
    { label: 'Home', path: '/', icon: 'bi bi-house-door-fill' },
    { label: 'Mandi Rates', path: '/mandi-rates', icon: 'bi bi-graph-up' },
    { label: 'Products', path: '/products', icon: 'bi bi-box-seam' },
    { label: 'Chat with Farmer/Buyer', path: '/messages', icon: 'bi bi-chat-dots-fill' },
    { label: 'Buyers', path: '/buyer', icon: 'bi bi-person-badge-fill' },
    { label: 'Settings', path: '/settings', icon: 'bi bi-gear-fill' },
    { label: 'Orders', path: '/orders', icon: 'bi bi-bag-check-fill' },
    { label: 'Payments', path: '/payments', icon: 'bi bi-cash-stack' },
    { label: 'Reports', path: '/reports', icon: 'bi bi-clipboard-data-fill' },
    { label: 'Help Center', path: '/help-center', icon: 'bi bi-info-circle-fill' },
    { label: 'Add Product', path: '/components/product', icon: 'bi-plus-circle' },
  ];

  otherItems: SearchItem[] = [
    { label: 'Wheat' },
    { label: 'Rice' },
    { label: 'Mango' },
    { label: 'Farmer: Ramesh' },
    { label: 'Buyer: Vikash' },
    { label: 'Product Dashboard' },
    { label: 'Orders Tab' }
  ];

  allItems: SearchItem[] = [];

  onSearch() {
    if (!this.query.trim()) {
      this.results = [];
      this.highlightedIndex = -1;
      return;
    }
    this.results = this.allItems.filter(item =>
      item.label.toLowerCase().includes(this.query.toLowerCase())
    );
    this.highlightedIndex = -1;
  }

  selectItem(item: SearchItem) {
     this.query = '';   // instead of item.label
    this.results = [];
    this.highlightedIndex = -1;

    if (item.path) {
      this.router.navigate([item.path]);
    } else {
      console.log('Selected:', item.label);
    }
  }

  // Handle keyboard navigation
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.results.length) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.highlightedIndex =
        (this.highlightedIndex + 1) % this.results.length;
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.highlightedIndex =
        (this.highlightedIndex - 1 + this.results.length) %
        this.results.length;
    } else if (event.key === 'Enter') {
      if (this.highlightedIndex >= 0 && this.highlightedIndex < this.results.length) {
        this.selectItem(this.results[this.highlightedIndex]);
      }
    }
  }

  isHighlighted(index: number): boolean {
    return this.highlightedIndex === index;
  }
}
