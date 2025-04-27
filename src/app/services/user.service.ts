import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllBuyer, Farmer, FarmerDTO, UpdateBuyer,BuyerById } from '../models/User';
import { map, Observable, of } from 'rxjs';
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
  private getallbuyers = environment.APIUrl + 'Buyer/GetAllBuyers';
  private getbuyerbyid = environment.APIUrl + 'Buyer/GetBuyerById';
  private getbuyerid = environment.APIUrl + 'Buyer/GetBuyerID';

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

  // GetAllBuyers(): Observable<AllBuyer[]> {
    // const headers = this.getAuthHeaders();
    // return headers ? this.http.get<AllBuyer[]>(this.getallbuyers, { headers }) : of([]);
  // }
  GetAllBuyers(): Observable<AllBuyer[]> {
    const headers = this.getAuthHeaders();
    return headers ? this.http.get<AllBuyer[]>(this.getallbuyers, { headers }).pipe(
      map(buyers => {
        return buyers.map(buyer => {
          if (buyer.bytes && buyer.contenttype) {
            // Convert the base64 string to byte array
            const byteArray = this.base64ToByteArray(buyer.bytes);
            const blob = new Blob([byteArray], { type: buyer.contenttype });
            const url = URL.createObjectURL(blob);
  
            buyer.profileImageUrl = url; // ✅ Save blob URL to use in component
          } else {
            // In case there's no image, use a default one
            buyer.profileImageUrl = 'images/profile.jpeg';
          }
          return buyer;
        });
      })
    ) : of([]);
  }
  
  // Helper function to convert base64 string to byte array
  private base64ToByteArray(base64String: string): Uint8Array {
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }
  
  GetBuyerById(buyerid: number): Observable<BuyerById> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      return of(null as unknown as BuyerById);
    }
    const url = `${this.getbuyerbyid}?buyerid=${buyerid}`;
    return this.http.get<BuyerById>(url, { headers });
  }

  Getbuyerid(userid: number): Observable<number> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      return of(null as unknown as number);
    }
    const url = `${this.getbuyerid}?userid=${userid}`;
    return this.http.get<number>(url, { headers });
  }  

}
