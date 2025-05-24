import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Product, ProductByID } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productinventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productinventory.component.html',
  styleUrls: ['./productinventory.component.css']
})
export class ProductinventoryComponent implements OnInit {
  products: Product[] = [];
  selectedproduct: ProductByID | null = null;
  loading: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.checkAndLoadData(); // Using the extracted method directly
  }

  checkAndLoadData() {
    this.route.params.subscribe(params => {
      const productId = params['productid'];
      if (productId) {
        this.loadProductDetails(+productId);
      } else {
        this.loadAllProducts();
      }
    });
  }

  loadProductDetails(productId: number): void {
    this.loading = true;
    this.productService.GetProductById(productId).subscribe({
      next: (data: ProductByID) => {
        this.loading = false;
        this.selectedproduct = data || null;
        this.products = [];
      },
      error: (error) => {
        this.loading = false;
        this.selectedproduct = null;
        console.error('❌ Error loading product details:', error);
      }
    });
  }

  loadAllProducts(): void {
    this.loading = true;
    this.productService.GetAllProduct().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.loading = false;
        this.selectedproduct = null;
      },
      error: (err) => {
        this.loading = false;
        console.error('❌ Error fetching products:', err);
      }
    });
  }

  viewDetails(product: Product): void {
    this.router.navigate(['products', product.productid]);
  }

  goBackToList(): void {
    this.router.navigate(['/products']);
  }

  contactFarmer(product: Product | ProductByID): void {
    console.log('📞 Contacting farmer for:', product);
  }

  buyProduct(product: Product | ProductByID): void {
    console.log('🛒 Buying product:', product);
  }
  viewProductPdf(productId: number): void {
  this.productService.getProductPdf(productId).subscribe({
    next: (pdfBlob) => {
      const blob = new Blob([pdfBlob], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Open PDF in a new tab
      window.open(url, '_blank', 'noopener');

      // Optional: Revoke URL after a delay (for memory cleanup)
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    },
    error: (err) => {
      console.error('Failed to load PDF:', err);
      alert('Unable to open the product PDF. Please try again later.');
    }
  });
}

}
