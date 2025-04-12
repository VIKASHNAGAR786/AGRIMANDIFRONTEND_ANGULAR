import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../components/alert/alert.component';
import { Router } from '@angular/router'; 
import { AlertService } from '../../services/alert.service';
import { LoginService, LoginRequest, LoginResponse } from '../../services/login.service';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, AlertComponent],
})
export class LoginComponent {
  loginData: LoginRequest = {
    email: '',
    password: ''
  };

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router ,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login() {
    this.loginService.login(this.loginData).subscribe(
      (response: LoginResponse) => {
        console.log('✅ Login successful:', response);

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user_name', response.name);
          localStorage.setItem('user_role', response.role);
          localStorage.setItem('user_email', response.email);
        }

        this.alertService.showAlert('Login successful!', 'success');
        this.router.navigate(['components/product']);
      },
      (error) => {
        console.error('❌ Login failed:', error);
        this.alertService.showAlert('Login failed! Please check your credentials.', 'error');
      }
    );
  }

  testSuccess() {
    this.alertService.showAlert('Test success alert!', 'success');
  }

  testError() {
    this.alertService.showAlert('Test error alert!', 'error');
  }
}
