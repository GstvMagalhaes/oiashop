import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  SERVER_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.SERVER_URL + 'products');
  }
}
