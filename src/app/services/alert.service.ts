import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<{ message: string; type: 'success' | 'error' | null }>({ message: '', type: null });
  alert$ = this.alertSubject.asObservable();
  showAlert(message: string, type: 'success' | 'error') {
    console.log('🔴 Emitting alert:', { message, type });
    this.alertSubject.next({ message, type });
  
    // Ensure the alert stays visible for at least 3 seconds before hiding
    setTimeout(() => {
      console.log('🟢 Hiding alert');
      this.alertSubject.next({ message: '', type: null });  // Clears alert after 3 seconds
    }, 3000);
  }
  }

