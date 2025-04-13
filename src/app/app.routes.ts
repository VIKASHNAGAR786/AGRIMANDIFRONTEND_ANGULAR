import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  // 🏠 Home Page
  { path: '', component: HomeComponent },

  // 🔐 Signup Pagea
  { path: 'auth/signup', component: SignupComponent },

  // 📦 Product List Page
  { path: 'components/product', component: ProductComponent },

  // 🛒 Product Inventory (All Products)
  {
    path: 'products',
    loadComponent: () =>
      import('./components/productinventory/productinventory.component').then(
        (m) => m.ProductinventoryComponent
      )
  },

  // 🔍 Product Detail Page (By ID)
  {
    path: 'products/:productid',
    loadComponent: () =>
      import('./components/productinventory/productinventory.component').then(
        (m) => m.ProductinventoryComponent
      )
  },

  // 🚨 Wildcard route for 404s — must be last
  { path: '**', redirectTo: '' }
];
