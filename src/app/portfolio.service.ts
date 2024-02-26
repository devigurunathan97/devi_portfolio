import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url: any = 'http://44.211.166.253:8001';
  constructor(private http: HttpClient) { }
  products() {
    return this.http.get<any[]>(this.url + '/products');
  }

  product(id :any) {
    return this.http.get<any[]>(this.url + '/products/' + id);
  }

  create_order(amount :any) {
    return this.http.post<any[]>(this.url + '/create_order', amount);
  }

  payment_details(payment_data: any): Observable<object> {
    return this.http.post<any[]>(this.url + '/fetch_order', payment_data);
  }
}
