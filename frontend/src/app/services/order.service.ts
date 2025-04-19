import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private BASE_URL = 'http://127.0.0.1:8000/orders/';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL);
  }

  addOrder(order: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL, order);
  }
}
