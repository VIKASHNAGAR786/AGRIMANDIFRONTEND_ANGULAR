
import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from "./components/product/product.component";

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home Page
  { path: 'auth/signup', component: SignupComponent }, // Signup Page
  { path: 'product', component: ProductComponent }, // Product Page
  { path: '**', redirectTo: '' }, // Redirect unknown routes to Home (should be LAST)
];
