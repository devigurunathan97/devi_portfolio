import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor(private http: HttpClient) { }
  products() {
    return this.http.get<any[]>('http://34.229.157.92:3001/products');
  }

  product(id :any) {
    return this.http.get<any[]>('http://34.229.157.92:3001/products/' + id);
  }

  create_order(amount :any) {
    return this.http.post<any[]>('http://34.229.157.92:3001/create_order', amount);
  }

  payment_details(payment_data: any): Observable<object> {
    return this.http.post<any[]>('http://34.229.157.92:3001/fetch_order', payment_data);
  }
}
