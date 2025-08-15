import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserinfowithloginService {
  private cachedData: {
    token: string | null;
    name: string | null;
    role: string | null;
    email: string | null;
    id: number | null;
  } | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadFromLocalStorage();
  }

  /** Load data from localStorage into memory */
  private loadFromLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cachedData = {
        token: localStorage.getItem('auth_token'),
        name: localStorage.getItem('user_name'),
        role: localStorage.getItem('user_role'),
        email: localStorage.getItem('user_email'),
        id: this.parseId(localStorage.getItem('nameid'))
      };
    }
  }

  /** Parse ID safely */
  private parseId(value: string | null): number | null {
    return value ? Number(value) : null;
  }

  /** Get token */
  getToken(): string | null {
    return this.cachedData?.token ?? null;
  }

  /** Get username */
  getUserName(): string | null {
    return this.cachedData?.name ?? null;
  }

  /** Get role */
  getUserRole(): string | null {
    return this.cachedData?.role ?? null;
  }

  /** Get email */
  getUserEmail(): string | null {
    return this.cachedData?.email ?? null;
  }

  /** Get ID */
  getUserId(): number | null {
    return this.cachedData?.id ?? null;
  }

  /** Refresh data from localStorage (if user logs in or logs out) */
  refresh(): void {
    this.loadFromLocalStorage();
  }

  /** Clear cache (optional, used in logout) */
  clear(): void {
    this.cachedData = null;
  }
}
