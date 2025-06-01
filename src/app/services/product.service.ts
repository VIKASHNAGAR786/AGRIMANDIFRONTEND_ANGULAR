import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product, ProductByID, ProductFilter, UserByproduct } from '../models/product';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getFarmerIdUrl = environment.APIUrl + 'Product/GetFarmerId';
  private apiUrl = environment.APIUrl + 'Product/Saveproduct';
  private GetAllProductUrl = environment.APIUrl + 'Product/GetAllProduct';
  private GetProductByIdUrl = environment.APIUrl + 'Product/GetProductById';
  private GetProductReportPdfUrl = environment.APIUrl + 'Product/GetProductPdf';
  private GetProductByFarmerIdUrl = environment.APIUrl + 'Farmer/Getproductbyfarmerid';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  private getAuthHeaders(): HttpHeaders | null {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    }
    return null;
  }

  saveproduct(productdata: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return headers ? this.http.post(this.apiUrl, productdata, { headers }) : of(null);
  }

  getFarmerId(email: string, name: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return headers ? this.http.get(`${this.getFarmerIdUrl}?email=${email}&name=${name}`, { headers })
    : of(null as unknown as any);
  }

  GetAllProduct(filter?: ProductFilter): Observable<Product[]> {
    const headers = this.getAuthHeaders();
    const cleanedFilter: { [key: string]: string | number | boolean } = {};

    if (filter) {
      Object.entries(filter).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          cleanedFilter[key] = value as string | number | boolean;
        }
      });
    }

    const params = new HttpParams({ fromObject: cleanedFilter });
    return headers ? this.http.get<Product[]>(this.GetAllProductUrl, { params, headers })
    : of([] as Product[]);
  }

  GetProductById(productId: number): Observable<ProductByID> {
    const headers = this.getAuthHeaders();
    const url = `${this.GetProductByIdUrl}?productid=${productId}`;
    return headers ? this.http.get<ProductByID>(url, { headers }) : of(null as unknown as ProductByID);
  }

  getProductPdf(productId: number): Observable<Blob> {
    const headers = this.getAuthHeaders();
    return headers ? this.http.get(`${this.GetProductReportPdfUrl}`, {
      params: new HttpParams().set('productid', productId.toString()),
      responseType: 'blob',
      headers
    }) : of(new Blob());
  }

  getProductByFarmerId(id: number, email: string): Observable<UserByproduct[]> {
    const headers = this.getAuthHeaders();
    const params = new HttpParams().set('id', id).set('email', email);
    return headers ? this.http.get<UserByproduct[]>(this.GetProductByFarmerIdUrl, { params, headers }) 
    : of([] as UserByproduct[]);
  }
}
