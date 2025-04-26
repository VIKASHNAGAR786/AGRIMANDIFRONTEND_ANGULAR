import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="alertData.message" class="alert" [ngClass]="alertData.type">
      {{ alertData.message }}
    </div>
  `,
  styles: [`
    .alert {
      position: fixed;
      bottom: 20px;  /* ✅ Changed from top to bottom */
      right: 20px;   /* ✅ Changed from left to right */
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 16px;
      color: white;
      z-index: 1000;
      animation: fadeInOut 3s ease-in-out;
      min-width: 250px;
      text-align: center;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    .success {
      background-color: #28a745;
    }
    .error {
      background-color: #dc3545;
    }
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(20px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(20px); }
    }
  `]
})
export class AlertComponent {
  alertData = { message: '', type: 'success' as 'success' | 'error' | null };

  constructor(private alertService: AlertService) {
    this.alertService.alert$.subscribe((data) => {
      console.log('🟡 Alert received:', data); // ✅ Debugging log
      this.alertData = data;
    });
  }
}
