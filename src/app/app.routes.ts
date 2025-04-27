import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { BuyerComponent } from './components/buyer/buyer.component';

export const routes: Routes = [
  // 🏠 Home Page
  { path: '', component: HomeComponent },

  // 🔐 Signup Pagea
  { path: 'auth/signup', component: SignupComponent },

  // 📦 Product List Page
  { path: 'components/product', component: ProductComponent },
  //{ path: 'components/buyer', component: BuyerComponent },

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

  {
    path: 'buyer',
    loadComponent: () =>
      import('./components/buyer/buyer.component').then(
        (m) => m.BuyerComponent
      )
  },
  // 🔍 Product Detail Page (By ID)
  {
    path: 'buyer/:buyerid',
    loadComponent: () =>
      import('./components/buyer/buyer.component').then(
        (m) => m.BuyerComponent
      )
  },

  // 🚨 Wildcard route for 404s — must be last
  { path: '**', redirectTo: '' }
];
