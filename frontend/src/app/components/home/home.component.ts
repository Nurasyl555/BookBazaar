import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 это нужно
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // 👈 обязательно импортировать
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
}
