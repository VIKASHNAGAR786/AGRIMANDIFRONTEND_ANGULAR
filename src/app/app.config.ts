import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProfileviewComponent } from './components/profileview/profileview.component';

// Guard
import { AuthGuard } from './auth.guard'; // Adjust path if needed

const routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'components/product', component: ProductComponent, canActivate: [AuthGuard] },
  { path: 'components/profileview', component: ProfileviewComponent, canActivate: [AuthGuard] },

  {
    path: 'products',
    loadComponent: () =>
      import('./components/productinventory/productinventory.component').then(
        m => m.ProductinventoryComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'products/:productid',
    loadComponent: () =>
      import('./components/productinventory/productinventory.component').then(
        m => m.ProductinventoryComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  },

  {
    path: 'buyer',
    loadComponent: () =>
      import('./components/buyer/buyer.component').then(
        (m) => m.BuyerComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'buyer/:buyerid',
    loadComponent: () =>
      import('./components/buyer/buyer.component').then(
        (m) => m.BuyerComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./components/notification/notification.component').then(
        (m) => m.NotificationComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./components/orders/orders.component').then(
        (m) => m.OrdersComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('./components/payments/payments.component').then(
        (m) => m.PaymentsComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./components/message/message.component').then(
        (m) => m.MessageComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  },
  {
    path: 'help-center',
    loadComponent: () =>
      import('./components/help-center/help-center.component').then(
        (m) => m.HelpCenterComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  } as any,

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  } as any,
  {
    path: 'farmers',
    loadComponent: () =>
      import('./components/farmers/farmers.component').then(
        (m) => m.FarmersComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  } as any,
  {
    path: 'reports',
    loadComponent: () =>
      import('./components/reports/reports.component').then(
        (m) => m.ReportsComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  } as any,
  {
    path: 'settings',
    loadComponent: () =>
      import('./components/setting/setting.component').then(
        (m) => m.SettingComponent
      ),
    canActivate: [AuthGuard],
    renderMode: 'blocking'
  } as any,

  // Catch-all
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
