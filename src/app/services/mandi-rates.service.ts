import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserinfowithloginService } from './userinfowithlogin.service';
import { isPlatformBrowser } from '@angular/common';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { PriceApiResponseDto } from '../models/product';
import { PriceRequestDto } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MandiRatesService {
  private headersCache: HttpHeaders | null = null;
  private getMandiPricesUrl = environment.APIUrl + 'Mandi/GetMandiPrices';
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userInfo: UserinfowithloginService
  ) { }

    private getAuthHeaders(): HttpHeaders | null {
    if (!this.headersCache && isPlatformBrowser(this.platformId)) {
      const token = this.userInfo.getToken();
      if (token) {
        this.headersCache = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
      }
    }
    return this.headersCache;
  }


GetMandiPriceData(priceRequestDto: PriceRequestDto): Observable<PriceApiResponseDto | null> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      return of(null);
    }

    let params = new HttpParams();
    Object.keys(priceRequestDto).forEach(key => {
      const value = (priceRequestDto as any)[key];
      if (value !== null && value !== undefined && value !== '') {
        params = params.set(key, value);
      }
    });

    return this.http.get<PriceApiResponseDto>(this.getMandiPricesUrl, { headers, params }).pipe(
      shareReplay(1),
      catchError(err => {
        console.error('GetMandiPriceData error', err);
        return of(null);
      })
    );
  }
}
