import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductByID, ProductFilter, UserByproduct } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getFarmerIdUrl = environment.APIUrl + 'Product/GetFarmerId';
  private apiUrl = environment.APIUrl + 'Product/Saveproduct';  // API Endpoint
  private GetAllProductUrl = environment.APIUrl + 'Product/GetAllProduct';
  private GetProductByIdUrl = environment.APIUrl + 'Product/GetProductById';
  private GetProductReportPdfUrl = environment.APIUrl + 'Product/GetProductPdf';
  private GetProductByFarmerIdUrl = environment.APIUrl + 'Farmer/Getproductbyfarmerid';

  constructor(private http: HttpClient) { }

  saveproduct(productdata: any): Observable<any> {
    return this.http.post(this.apiUrl, productdata);
  }

  // Get Farmer ID
  // Get FarmerId using email and name
  getFarmerId(email: string, name: string): Observable<any> {
    return this.http.get(`${this.getFarmerIdUrl}?email=${email}&name=${name}`);
  }

  GetAllProduct(filter?: ProductFilter): Observable<Product[]> {
    const cleanedFilter: { [key: string]: string | number | boolean } = {};
    if (filter) {
      Object.entries(filter).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          cleanedFilter[key] = value as string | number | boolean;
        }
      });
    }
    const params = new HttpParams({ fromObject: cleanedFilter });
    return this.http.get<Product[]>(this.GetAllProductUrl, { params });
  }

  GetProductById(productId: number): Observable<ProductByID> {
    const url = `${this.GetProductByIdUrl}?productid=${productId}`;
    return this.http.get<ProductByID>(url);
  }

  getProductPdf(productId: number): Observable<Blob> {
    return this.http.get(`${this.GetProductReportPdfUrl}`, {
      params: new HttpParams().set('productid', productId.toString()),
      responseType: 'blob'
    });
  }

  // ✅ New method: Get products by farmer ID and email
  getProductByFarmerId(id: number, email: string): Observable<UserByproduct[]> {
    const params = new HttpParams()
      .set('id', id)
      .set('email', email);

    return this.http.get<UserByproduct[]>(this.GetProductByFarmerIdUrl, { params });
  }
}
