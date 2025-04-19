import { OrderItem } from './order-item.model';

export interface Order {
  id?: number;
  date: string;
  items: OrderItem[];
}
