import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Farmer, FarmerDTO, UpdateBuyer } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerAsBuyerUrl = environment.APIUrl + 'Buyer/Registerasabuyer';
  private savefarmerurl = environment.APIUrl + 'Farmer/Savefarmer';
  private getfarmerurl = environment.APIUrl + 'Farmer/Getfarmerdata';
  private getFarmerIdUrl = environment.APIUrl + 'Product/GetFarmerId';
  constructor(private http: HttpClient) { }

  registerAsBuyer(data: UpdateBuyer): Observable<any> {
    const token = localStorage.getItem('auth_token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.registerAsBuyerUrl, data, { headers });
  }
  saveFarmer(data: Farmer): Observable<any> {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(this.savefarmerurl, data, { headers });
  }
  getFarmerData(): Observable<FarmerDTO> {
    const token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<FarmerDTO>(this.getfarmerurl, { headers });
  }

  getFarmerId(email: string, name: string): Observable<any> {
    return this.http.get(`${this.getFarmerIdUrl}?email=${email}&name=${name}`)
  }
  
}
