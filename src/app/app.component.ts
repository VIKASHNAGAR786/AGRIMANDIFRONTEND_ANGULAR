import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, AlertComponent],
  template: `
    <!-- Alerts -->
    <app-alert></app-alert>

    <!-- Header / Navbar -->
    <header>
      <app-navbar></app-navbar>
    </header>

    <!-- Main Content -->
    <main class="container mt-4 mb-5">
      <router-outlet></router-outlet>
    </main>

    <!-- Footer -->
    <footer class="bg-success text-white text-center py-3">
      <div class="container">
        <p class="mb-1">🌱 <strong>AgriMandi</strong> - Empowering Farmers with Technology</p>
        <p class="mb-0">&copy; {{ currentYear }} AgriMandi. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
  title = 'AgriMandi-Frontend';
  currentYear: number = new Date().getFullYear();
}
