import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuth } from './iauth';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  api: string = 'http://localhost:5000/'

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  public login(request: any): Observable<IAuth>{
    return this.http.post<IAuth>(this.api + 'Authentication/Login()', request);
  }

  public signUp(request: any): Observable<IAuth> {
    return this.http.post<IAuth>(this.api + 'Authentication/SignUp()', request);
  }

  public getCagegories(name: string | null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.get<any>(this.api + 'Category/GetCategories()' + (name ? '?name=' + name : ''), { headers: headers });
  }

  public addCategory(request: {name: string, image: File}): Observable<any> {

    const formData = new FormData();
    formData.append("Name", request.name);
    formData.append("Image", request.image);


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.post<any>(this.api + 'Category/AddCategories()', formData);
  }

  public getProductById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.get<any>(this.api + 'Product/GetProductById/' + id, { headers: headers });
  }

  
  public getProductByCategoryId(id: any, name: string | null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.get<any>(this.api + 'Product/GetProductByCategoryId/' + id + (name ? '?name=' + name : ''), { headers: headers });
  }

  public addProduct(request: {categoryId: number, price: number, description: string, name: string, 
    aboutProduct: string, image: File}): Observable<any> {

    const formData = new FormData();
    formData.append("Name", request.name);
    formData.append("CategoryId", request.categoryId.toString());
    formData.append("Price", request.price.toString());
    formData.append("Description", request.description);
    formData.append("AboutProduct", request.aboutProduct);
    formData.append("Image", request.image);


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.post<any>(this.api + 'Product/AddProduct()', formData);
  }

  public getShoppingCart(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.get<any>(this.api + 'ShoppingCart/GetShoppingCartByUserId', { headers: headers });
  }

  public updateToShoppingCart(request: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });    
    return this.http.post<any>(this.api + 'ShoppingCart/UpdateToShoppingCart()', request, { headers: headers });
  }

}
