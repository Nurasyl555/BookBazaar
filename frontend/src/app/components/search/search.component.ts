import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  searchResults: Book[] = [];

  constructor(private bookService: BookService) {}

  onSearch(): void {
    if (this.query.trim() === '') return;

    this.bookService.searchBooks(this.query).subscribe((data) => {
      this.searchResults = data;
    });
  }
}
