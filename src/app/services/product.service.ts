import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductByID } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private getFarmerIdUrl = environment.APIUrl + 'Product/GetFarmerId';
  private apiUrl = environment.APIUrl + 'Product/Saveproduct';  // API Endpoint
  private GetAllProductUrl = environment.APIUrl + 'Product/GetAllProduct';
  private GetProductByIdUrl = environment.APIUrl + 'Product/GetProductById';

  constructor(private http: HttpClient) {   }
  
  saveproduct(productdata: any): Observable<any> {
    return this.http.post(this.apiUrl, productdata);
  }

  // Get Farmer ID
  // Get FarmerId using email and name
  getFarmerId(email: string, name: string): Observable<any> {
    return this.http.get(`${this.getFarmerIdUrl}?email=${email}&name=${name}`);
  }

  GetAllProduct(): Observable<any> {
    return this.http.get(this.GetAllProductUrl);
  }
  
  GetProductById(productId: number): Observable<ProductByID> {
    const url = `${this.GetProductByIdUrl}?productid=${productId}`;
    return this.http.get<ProductByID>(url);
  }
}
