import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageToFarmerModel } from '../models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private contactFarmerurl = environment.APIUrl + 'Message/ContactFarmer';
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  //common method to get auth headers
  private getAuthHeaders(): HttpHeaders | null {
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('auth_token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  return null;
}

async ContactFarmer(data: MessageToFarmerModel): Promise<Observable<any>> {
  const headers = this.getAuthHeaders();
  return headers
    ? this.http.post<any>(this.contactFarmerurl, data, { headers })
    : of(null);
}

}
