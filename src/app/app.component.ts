import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, AlertComponent],
  styleUrls: ['./app.component.css'],
  template: `

<div class="background-wrapper">
    <!-- 🌤 Animated background elements -->
    <div class="sky">
    <div class="birds"></div>
      <div class="cloud cloud1"></div>
      <div class="cloud cloud2"></div>
      <div class="sun"></div>
      <div class="bird bird2"></div>
    </div>
  
    <!-- 🌾 Foreground content -->
    <div class="content-overlay">
      <router-outlet></router-outlet>
    </div>
  </div>
  
    <!-- Alerts -->
    <app-alert></app-alert>

    <!-- Header / Navbar -->
    <header>
      <app-navbar></app-navbar>
    </header>

    <!-- Main Content -->
    <!-- <main class="container mt-4 mb-5"> -->
      <!-- <router-outlet></router-outlet> -->
    <!-- </main> -->

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
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }
  title = 'AgriMandi-Frontend';
  currentYear: number = new Date().getFullYear();
}
