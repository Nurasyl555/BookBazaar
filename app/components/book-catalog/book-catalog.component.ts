import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-book-catalog',
    imports: [CommonModule, SearchComponent, FilterComponent],
    templateUrl: './book-catalog.component.html',
    styleUrls: ['./book-catalog.component.css']
  })
  export class BookCatalogComponent implements OnInit {
    books: Book[] = [];
  
    constructor(
      private bookService: BookService,
      private cartService: CartService
    ) {}    
  
    ngOnInit(): void {
      this.bookService.getBooks().subscribe((data) => {
        this.books = data;
      });
    }

    applyFilter(filter: {
      genre: string;
      publisher: string;
      minPrice: number | null;
      maxPrice: number | null;
      ageLimit: string;
    }) {
      
      console.log('Фильтр:', filter);
    
     
      this.bookService.getBooksByFilter(filter.genre, filter.publisher)
        .subscribe((data) => {
          this.books = data;
        });
    
     
    }

    addToCart(book: Book): void {
      this.cartService.addToCart(book);
      alert(`Книга "${book.title}" добавлена в корзину!`);
    }
    
    
  }
  