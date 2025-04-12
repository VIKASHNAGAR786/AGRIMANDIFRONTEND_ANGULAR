import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-profileview',
  imports: [CommonModule],
  templateUrl: './profileview.component.html',
  styleUrl: './profileview.component.css'
})
export class ProfileviewComponent {

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Listen for navigation changes to update login status
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.Collectlogindata());
  }

  loginData: any = {
    isLoggedIn: false,
    userName: '',
    userRole: '',
    userEmail: ''
  };
isLoggedIn : boolean = false;

Collectlogindata() {
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('auth_token');

    this.loginData = {
      isLoggedIn: !!token,
      userName: localStorage.getItem('user_name'),
      userRole: localStorage.getItem('user_role'),
      userEmail: localStorage.getItem('user_email')
    };
  }
}
}
