import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;

  name: string = '';
  address: string = '';

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}
  

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  submitOrder(): void {
    if (!this.name || !this.address) {
      alert('Пожалуйста, заполните имя и адрес');
      return;
    }
  
    const order = {
      name: this.name,
      address: this.address,
      total: this.total,
      date: new Date(),
      items: this.cartItems.map(item => ({
        title: item.book.title,
        quantity: item.quantity,
        price: item.book.price
      }))
    };
  
    this.orderService.addOrder(order);
  
    alert(`Заказ оформлен!\nИмя: ${this.name}\nАдрес: ${this.address}\nИтого: ${this.total} ₸`);
    this.cartService.clearCart();
    this.name = '';
    this.address = '';
  }
  
}
