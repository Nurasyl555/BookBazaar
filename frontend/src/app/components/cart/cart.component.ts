import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Book } from '../../models/book.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartComponent {
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
    const existing = this.items.find(item => item.book.id === book.id);
    if (existing) {
      existing.quantity++;
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
    if (item) {
      item.quantity = quantity;
    }
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
