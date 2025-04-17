import { Routes } from '@angular/router';
import { BookCatalogComponent } from './components/book-catalog/book-catalog.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
export const routes: Routes = [
  { path: '', component: BookCatalogComponent },
  { path: 'books/:id', component: BookDetailComponent },
];
