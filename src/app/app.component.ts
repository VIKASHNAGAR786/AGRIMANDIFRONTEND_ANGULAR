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
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LayoutService } from './services/layout.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, AlertComponent, DesignComponent, WheelComponent, SidebarComponent],
  styleUrls: ['./app.component.css'],
  template: `
    <!-- 🔵 Animated Background Layer -->
    <app-design></app-design>
<app-sidebar></app-sidebar>
    <!-- 🔴 Foreground Content Overlay -->
    <div class="content-overlay transition-all duration-300"
     [class.md:ml-64]="sidebarVisible"
     [class.ml-0]="!sidebarVisible">
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
       <footer
  class="text-white py-8 text-center md:text-left mt-16"
  [ngStyle]="{ 'background-color': selectedColor || '#198754' }"
>
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    
    <!-- Left: Branding -->
    <div>
      <h2 class="text-2xl font-bold mb-2 tracking-wider">🌱 AgriMandi</h2>
      <p class="text-sm opacity-80">Empowering Farmers with Technology for a Better Tomorrow</p>
    </div>

    <!-- Center: Social Media Icons -->
    <div class="flex justify-center space-x-6 text-lg mt-4 md:mt-0">
      <a href="https://github.com/VIKASHNAGAR786" target="_blank" class="hover:text-[#00ffee] transition">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://linkedin.com/in/vikashnagar786" target="_blank" class="hover:text-[#00ffee] transition">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="mailto:vikashnagar872@gmail.com" class="hover:text-[#00ffee] transition">
        <i class="bi bi-envelope-fill"></i>
      </a>
      <a href="#" class="hover:text-[#00ffee] transition">
        <i class="bi bi-twitter-x"></i>
      </a>
      <a href="#" class="hover:text-[#00ffee] transition">
        <i class="bi bi-facebook"></i>
      </a>
    </div>

    <!-- Right: Developer Credit -->
    <div class="text-sm text-gray-100 mt-6 md:mt-0 text-center md:text-right">
      <p>&copy; {{ currentYear }} AgriMandi. All rights reserved.</p>
      <p>Developed with 💚 by <strong class="text-[#00ffee]">Vikash Nagar</strong></p>
       <p class="text-gray-400 text-xs">Version 1.0.0</p>
    </div>
  </div>
</footer>

    </div>
  `
})

export class AppComponent implements OnInit {
  selectedColor: string = ''; // default
  sidebarVisible = true;
  receivedMessage: string = "";
  constructor(private colorService: ColorserviceService,
    private signalRService: SignalrService,
  private layoutService: LayoutService 
) {
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
    // ✅ Subscribe to sidebar state
    this.layoutService.sidebarVisible$.subscribe(visible => {
      this.sidebarVisible = visible;
    });

    this.signalRService.startConnection().subscribe(() => {
      this.signalRService.receiveMessage().subscribe((message) => {
        this.receivedMessage = message;
      });
    });
  }

  sendMessage(message: string): void {
    this.signalRService.sendMessage(message);
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
