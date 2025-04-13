import { Component } from '@angular/core';
import {Product, ProductByID } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetailpage',
  imports: [CommonModule],
  templateUrl: './productdetailpage.component.html',
  styleUrl: './productdetailpage.component.css'
})
export class ProductdetailpageComponent {
  selectedproduct: ProductByID | null = null;
  loading: boolean = true;
   products: Product[] = [];

  constructor(
    private productService: ProductService,
    public router: Router,
  ) {}

  loadProductDetails(productId: number) {
    this.loading = true;
    this.productService.GetProductById(productId).subscribe({
      next: (data: ProductByID) => {
        this.loading = false;
        if (data) {
          this.selectedproduct = data;
          this.products = [];
        } else {
          this.selectedproduct = null;
        }
      },
      error: (error) => {
        this.loading = false;
        this.selectedproduct = null;
        console.error('Error loading product details:', error);
      }
    });
  }

}
