import { Routes } from '@angular/router';

import { BookCatalogComponent } from './components/book-catalog/book-catalog.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

export const routes: Routes = [
  { path: '', component: BookCatalogComponent },                  
  { path: 'books/:id', component: BookDetailComponent },          
  { path: 'cart', component: CartComponent },                    
  { path: 'checkout', component: CheckoutComponent },             
  { path: 'orders', component: MyOrdersComponent },                 
  { path: '**', redirectTo: '' }                                
];
