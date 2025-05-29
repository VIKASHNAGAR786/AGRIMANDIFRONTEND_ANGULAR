import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllBuyer, Farmer, FarmerDTO, UpdateBuyer,BuyerById, BuyerByIdForProfile } from '../models/User';
import { map, Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = environment.BASE_URL; 
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
        // Use image URL directly
        if (buyer.profileimage) {
      buyer.profileImageUrl = `${this.BASE_URL}/UserProfileImages/${buyer.profileimage}`;
    } else {
      buyer.profileImageUrl = 'images/profile.jpeg';
    }
        return buyer;
      });
    })
  ) : of([]);
}

  
  GetBuyerById(buyerid: number): Observable<BuyerById> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      return of(null as unknown as BuyerById);
    }
    const url = `${this.getbuyerbyid}?buyerid=${buyerid}`;
    return this.http.get<BuyerById>(url, { headers });
  }

  GetBuyerByIdForProfile(buyerid: number): Observable<BuyerByIdForProfile> {
    const headers = this.getAuthHeaders();
    if (!headers) {
      return of(null as unknown as BuyerByIdForProfile);
    }
    const url = `${this.getbuyerbyid}?buyerid=${buyerid}`;
    return this.http.get<BuyerByIdForProfile>(url, { headers });
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
