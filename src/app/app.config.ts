import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileviewComponent } from './components/profileview/profileview.component';
import { BuyerComponent } from './components/buyer/buyer.component';

// ⛔️ Removed ProductinventoryComponent — it's standalone and lazy-loaded

const routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'components/product', component: ProductComponent },
  //{ path: 'components/buyer', component: BuyerComponent },
  { path: 'components/profileview', component: ProfileviewComponent },

  // ✅ Use lazy loading for standalone component
  {
    path: 'products',
    loadComponent: () =>
      import('./components/productinventory/productinventory.component').then(
        m => m.ProductinventoryComponent
      )
  },
  {
    path: 'products/:productid',
    loadComponent: () =>
      import('./components/productinventory/productinventory.component').then(
        m => m.ProductinventoryComponent
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

  // Catch-all for undefined routes
  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([])),
    importProvidersFrom(FormsModule, ReactiveFormsModule)
  ]
};
