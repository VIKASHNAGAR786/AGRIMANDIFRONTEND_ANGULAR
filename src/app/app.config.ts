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
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  },

  {
    path: 'buyer',
    loadComponent: () =>
      import('./components/buyer/buyer.component').then(
        (m) => m.BuyerComponent
      )
  },
  {
    path: 'buyer/:buyerid',
    loadComponent: () =>
      import('./components/buyer/buyer.component').then(
        (m) => m.BuyerComponent
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./components/notification/notification.component').then(
        (m) => m.NotificationComponent
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./components/orders/orders.component').then(
        (m) => m.OrdersComponent
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('./components/payments/payments.component').then(
        (m) => m.PaymentsComponent
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./components/message/message.component').then(
        (m) => m.MessageComponent
      ),
    renderMode: 'blocking' // ⚠️ TS will complain
  },
  {
    path: 'help-center',
    loadComponent: () =>
      import('./components/help-center/help-center.component').then(
        (m) => m.HelpCenterComponent
      ),
    renderMode: 'blocking' // disables prerendering
  } as any,

  {
  path: 'dashboard',
  loadComponent: () =>
    import('./components/dashboard/dashboard.component').then(
      (m) => m.DashboardComponent
    ),
  renderMode: 'blocking' // disables prerendering
} as any,
{
  path: 'farmers',
  loadComponent: () =>
    import('./components/farmers/farmers.component').then(
      (m) => m.FarmersComponent
    ),
  renderMode: 'blocking' // disables prerendering
} as any,
{
  path: 'reports',
  loadComponent: () =>
    import('./components/reports/reports.component').then(
      (m) => m.ReportsComponent
    ),
  renderMode: 'blocking' // disables prerendering
} as any,
{
  path: 'settings',
  loadComponent: () =>
    import('./components/setting/setting.component').then(
      (m) => m.SettingComponent
    ),
  renderMode: 'blocking' // disables prerendering
} as any,

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
