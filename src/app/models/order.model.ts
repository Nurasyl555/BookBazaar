import { OrderItem } from './order-item.model';

export interface Order {
  id: number;
  items: OrderItem[];
  total_price: number;
  created_at: string;
  status: string;
}
