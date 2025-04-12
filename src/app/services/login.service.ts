import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userName: string;
  name: string;
  role: string;
  isActive: boolean;
  token: string;
  password: string;
  id: number;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.AccountApiUrl + 'Login/login';
constructor(private http: HttpClient) {}
login(logindata: LoginRequest): Observable<LoginResponse> {
  return this.http.post<LoginResponse>(this.apiUrl, logindata);
}
}
