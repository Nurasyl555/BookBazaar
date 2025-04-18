import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [];

  addOrder(order: any): void {
    this.orders.push(order);
  }

  getOrders(): any[] {
    return this.orders;
  }
}
