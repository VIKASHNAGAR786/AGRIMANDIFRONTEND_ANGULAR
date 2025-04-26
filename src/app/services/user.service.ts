import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Farmer, FarmerDTO, UpdateBuyer } from '../models/User';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerAsBuyerUrl = environment.APIUrl + 'Buyer/Registerasabuyer';
  private savefarmerurl = environment.APIUrl + 'Farmer/Savefarmer';
  private getfarmerurl = environment.APIUrl + 'Farmer/Getfarmerdata';
  private getFarmerIdUrl = environment.APIUrl + 'Product/GetFarmerId';
  private saveProfileImage = environment.AccountApiUrl + 'SaveProfileimage/Save_Profile_image';
  private getprofileimage = environment.AccountApiUrl + 'GetProfileImage/get-profile-image';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // 🔐 Reusable method to get auth headers
  private getAuthHeaders(): HttpHeaders | null {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return null;
  }

  registerAsBuyer(data: UpdateBuyer): Observable<any> {
    const headers = this.getAuthHeaders();
    return headers
      ? this.http.post<any>(this.registerAsBuyerUrl, data, { headers })
      : of(null);
  }

  saveFarmer(data: Farmer): Observable<any> {
    const headers = this.getAuthHeaders();
    return headers
      ? this.http.post<any>(this.savefarmerurl, data, { headers })
      : of(null);
  }

  getFarmerData(): Observable<FarmerDTO> {
    const headers = this.getAuthHeaders();
    return headers
      ? this.http.get<FarmerDTO>(this.getfarmerurl, { headers })
      : of(null as unknown as FarmerDTO);
  }

  getFarmerId(email: string, name: string): Observable<any> {
    return this.http.get(`${this.getFarmerIdUrl}?email=${email}&name=${name}`);
  }

  uploadProfileImage(file: File, userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('userid', userId.toString());

    const headers = this.getAuthHeaders();
    return headers
      ? this.http.post(this.saveProfileImage, formData, { headers })
      : of(null);
  }

  getProfileImage(userId: number): Observable<Blob> {
    const headers = this.getAuthHeaders();
    const url = `${this.getprofileimage}?userid=${userId}`;
    return headers
      ? this.http.get(url, { headers, responseType: 'blob' })
      : of(new Blob());
  }
}
