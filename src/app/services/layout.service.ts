import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
@Injectable({ providedIn: 'root' })
export class LayoutService {
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();

  setSidebarVisible(value: boolean) {
    this.sidebarVisibleSubject.next(value);
  }

  toggleSidebar() {
    this.sidebarVisibleSubject.next(!this.sidebarVisibleSubject.value);
  }

  getSidebarVisible(): boolean {
    return this.sidebarVisibleSubject.value;
  }
}

