import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  genres: string[] = [];
  selectedGenre: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadGenres();
    this.loadBooks();
  }

  loadGenres(): void {
    this.bookService.getGenres().subscribe(data => {
      this.genres = data;
    });
  }

  loadBooks(): void {
    if (this.selectedGenre) {
      this.bookService.getBooksByFilter(this.selectedGenre).subscribe(data => {
        this.books = data;
      });
    } else {
      this.bookService.getBooks().subscribe(data => {
        this.books = data;
      });
    }
  }
}
