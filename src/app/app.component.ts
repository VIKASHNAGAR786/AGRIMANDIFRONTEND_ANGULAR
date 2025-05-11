import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import * as AOS from 'aos';
import { DesignComponent } from "./components/design/design.component";
import { WheelComponent } from "./components/wheel/wheel.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, AlertComponent, DesignComponent, WheelComponent],
  styleUrls: ['./app.component.css'],
  template: `
    <!-- 🔵 Animated Background Layer -->
    <app-design></app-design>

    <!-- 🔴 Foreground Content Overlay -->
    <div class="content-overlay">
      <!-- ✅ Navbar -->
      <header>
        <app-navbar></app-navbar>
      </header>

      <!-- ✅ Router View -->
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <!-- ✅ Wheel Component with Click Binding -->
      <app-wheel></app-wheel>

      <!-- ✅ Alert -->
      <app-alert></app-alert>

      <!-- ✅ Footer -->
      <footer class="bg-success text-white text-center py-3">
        <div class="container">
          <p class="mb-1">🌱 <strong>AgriMandi</strong> - Empowering Farmers with Technology</p>
          <p class="mb-0">&copy; {{ currentYear }} AgriMandi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }

  title = 'AgriMandi-Frontend';
  currentYear: number = new Date().getFullYear();

  showWheel = false;
  selectedColor: string = '';

  openWheel() {
    this.showWheel = true;
  }

  onColorSelected(color: string) {
    this.selectedColor = color;
    console.log('Color selected from wheel:', color);
    this.showWheel = false;
  }
}
