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
  //{ path: 'components/buyer', component: BuyerComponent },
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
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  } as any
  ,
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
      ),
    renderMode: 'blocking' // disables prerendering
  } as any,

  {
    path: 'help-center',
    loadComponent: () =>
      import('./components/help-center/help-center.component').then(
        (m) => m.HelpCenterComponent
      ),
    renderMode: 'blocking' // disables prerendering
  } as any,
  // 🚨 Wildcard route for 404s — must be last
  { path: '**', redirectTo: '' }
];
