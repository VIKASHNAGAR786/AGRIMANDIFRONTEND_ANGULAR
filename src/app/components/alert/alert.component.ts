import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';

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
    .info {
      background-color: #17a2b8;
    }
    .warning {
      background-color: #ffc107;
    }
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(20px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(20px); }
    }
  `]
})
export class AlertComponent implements OnDestroy {
  alertData = { message: '', type: 'success' as 'success' | 'error' | 'info' | 'warning' | null };
  alertSubscription: Subscription;

  constructor(private alertService: AlertService) {
    // Subscribing to alert service to receive alerts
    this.alertSubscription = this.alertService.alert$.subscribe((data) => {
      console.log('🟡 Alert received:', data); // ✅ Debugging log
      this.alertData = data;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from alert service when the component is destroyed to avoid memory leaks
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }
}
