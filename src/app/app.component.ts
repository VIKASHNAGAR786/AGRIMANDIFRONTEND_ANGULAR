import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import * as AOS from 'aos';
import { DesignComponent } from "./components/design/design.component";
import { WheelComponent } from "./components/wheel/wheel.component";
import { ColorserviceService } from './services/colorservice.service';
import { SignalrService } from './services/signalr.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, AlertComponent, DesignComponent, WheelComponent],
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
       <div class="pt-24">
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      </div>

      <!-- ✅ Wheel Component with Click Binding -->
      <app-wheel></app-wheel>

      <!-- ✅ Alert -->
      <app-alert></app-alert>

      <!-- ✅ Footer -->
      <footer class="text-white text-center py-3"  [ngStyle]="{ 'background-color': selectedColor || '#198754' }">
        <div class="container">
          <p class="mb-1">🌱 <strong>AgriMandi</strong> - Empowering Farmers with Technology</p>
          <p class="mb-0">&copy; {{ currentYear }} AgriMandi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `
})

export class AppComponent implements OnInit {
  selectedColor: string = ''; // default
  constructor(private colorService: ColorserviceService,private signalRService: SignalrService) {
    // Initialize any necessary services or data here
  }
  ngOnInit() {
    this.signalRService.startConnection();
    if (typeof window !== 'undefined') {
      AOS.init();
    }
    this.colorService.selectedColor$.subscribe(color => {
      this.selectedColor = color;
    });
  }

  title = 'AgriMandi-Frontend';
  currentYear: number = new Date().getFullYear();

  showWheel = false;




  openWheel() {
    this.showWheel = true;
  }

  onColorSelected(color: string) {
    this.selectedColor = color;
    console.log('Color selected from wheel:', color);
    this.showWheel = false;
  }
}
