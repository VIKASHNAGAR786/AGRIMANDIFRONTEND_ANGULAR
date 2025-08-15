import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { GetAllMessageUserBy_DTO, GetAllSenderAndBuyer, MessageToFarmerModel, SendMessageToTheUser } from '../models/User';
import { environment } from '../../environments/environment';
import { UserinfowithloginService } from './userinfowithlogin.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private BASE_URL = environment.BASE_URL; 
  private contactFarmerUrl = environment.APIUrl + 'Message/ContactFarmer';
  private getAllSenderAndReceiverUrl = environment.APIUrl + 'Message/GetAllSenderAndBuyer';
  private getAllMessageUserByUrl = environment.APIUrl + 'Message/GetAllMessageUserBy';
  private sendMessageUrl = environment.APIUrl + 'Message/SendMessage';

  private headersCache: HttpHeaders | null = null;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userInfo: UserinfowithloginService
  ) {}

  /** Cache and reuse auth headers for faster repeated calls */
  private getAuthHeaders(): HttpHeaders | null {
    if (!this.headersCache && isPlatformBrowser(this.platformId)) {
      const token = this.userInfo.getToken();
      if (token) {
        this.headersCache = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      }
    }
    return this.headersCache;
  }

  /** Send a message to farmer */
  ContactFarmer(data: MessageToFarmerModel): Observable<any> {
    const headers = this.getAuthHeaders();
    return headers
      ? this.http.post<any>(this.contactFarmerUrl, data, { headers }).pipe(
          shareReplay(1), // cache latest response
          catchError(err => {
            console.error('ContactFarmer error', err);
            return of(null);
          })
        )
      : of(null);
  }

  /** Get list of senders/receivers */
  GetAllSenderAndReceiverData(): Observable<GetAllSenderAndBuyer[]> {
    const headers = this.getAuthHeaders();
    return headers
      ? this.http.get<GetAllSenderAndBuyer[]>(this.getAllSenderAndReceiverUrl, { headers }).pipe(
          shareReplay(1),
          catchError(err => {
            console.error('GetAllSenderAndReceiverData error', err);
            return of([]);
          })
        )
      : of([]);
  }

  /** Get all messages by user */
  GetAllMessageUserBy(userid: number): Observable<GetAllMessageUserBy_DTO[]> {
    const headers = this.getAuthHeaders();
    return headers
      ? this.http.get<GetAllMessageUserBy_DTO[]>(
          `${this.getAllMessageUserByUrl}?useridformessage=${userid}`,
          { headers }
        ).pipe(
          catchError(err => {
            console.error('GetAllMessageUserBy error', err);
            return of([]);
          })
        )
      : of([]);
  }
  /** Send a message */
    sendMessage(data: Omit<SendMessageToTheUser, 'userid'>): Observable<{ message: string } | null> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      console.error('User not authenticated. Cannot send message.');
      return of(null);
    }

    return this.http
      .post<{ message: string }>(this.sendMessageUrl, data, { headers })
      .pipe(
        shareReplay(1), // cache the response for subscribers
        catchError(err => {
          console.error('SendMessage error:', err);
          return of(null);
        })
      );
  }
}
