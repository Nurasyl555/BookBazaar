import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  getItems(): CartItem[] {
    return this.items;
  }

  private updateCartCount(): void {
    const count = this.items.reduce((total, item) => total + item.quantity, 0);
    this.cartCountSubject.next(count);
  }

  addToCart(book: Book): void {
    const item = this.items.find(i => i.book.id === book.id);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({ book, quantity: 1 });
    }
    this.updateCartCount();
  }

  removeFromCart(bookId: number): void {
    this.items = this.items.filter(item => item.book.id !== bookId);
    this.updateCartCount();
  }

  updateQuantity(bookId: number, quantity: number): void {
    const item = this.items.find(i => i.book.id === bookId);
    if (item) item.quantity = quantity;
    this.updateCartCount();
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.book.price * item.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
    this.updateCartCount();
  }
}
