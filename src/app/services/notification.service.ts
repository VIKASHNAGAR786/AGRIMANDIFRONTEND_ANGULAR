import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MessageDTO } from '../models/User';
import { Observable, filter, map, of } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  private getallmessage = environment.APIUrl + 'Message/GetAllMessage';
  private getuserrole = environment.APIUrl + 'Message/GetUserRole';
  private getAuthHeaders(): HttpHeaders | null {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token')
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return null;
  }

  GettAllMessage(buyerid: number): Observable<MessageDTO[]> {
  const headers = this.getAuthHeaders();
  const params = new HttpParams().set('buyerid', buyerid.toString());

  return headers
    ? this.http.get<{ data: MessageDTO[] }>(this.getallmessage, { params, headers })
        .pipe(map(response => response.data))
    : of([] as MessageDTO[]);
}


  GetUserRole(): Observable<any> {
    const headers = this.getAuthHeaders(); // Include token if needed
    return headers ? this.http.get(this.getuserrole, { headers }) : of();
  }

}
