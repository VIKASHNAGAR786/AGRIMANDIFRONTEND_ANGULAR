import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css']
})
export class ProductBuyComponent {
  productId: number | null = null;

  // Dummy product (replace with service call later)
  product = {
    id: 1,
    name: 'Organic Wheat',
    price: 500,
    stock: 20,
    description: 'High-quality organic wheat, freshly harvested.',
    imageUrl: 'https://via.placeholder.com/400x300?text=Product+Image'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productId = params['id'] ? +params['id'] : null;
      console.log('Navigated with Product ID:', this.productId);
      // TODO: fetch product details by ID from service
    });
  }

  proceedToCheckout() {
    console.log('✅ Proceeding to checkout with:', this.product);
    // TODO: redirect to /checkout page
  }
}
