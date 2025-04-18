import { Book } from './book.model';

export interface OrderItem {
    id: number;
    book: Book;
    quantity: number;
    price: number;
  }
  