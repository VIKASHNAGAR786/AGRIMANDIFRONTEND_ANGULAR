import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-alert></app-alert>
    <app-navbar></app-navbar>  <!-- ✅ Add Navbar here -->
    <router-outlet></router-outlet>
  `,
  imports: [RouterModule, NavbarComponent, AlertComponent], 
  
})
export class AppComponent {
  title = 'AgriMandi-Frontend';
}
