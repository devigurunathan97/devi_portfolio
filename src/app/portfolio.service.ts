import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }
  products() {
    return this.http.get<any[]>('http://34.229.157.92:3001/products');
  }
}
