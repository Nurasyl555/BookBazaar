import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {
  book={
    title: '',
    description: '',
    author: '',
    genre: null,
    publisher: null,
    publication_date: '',
    age_limit: 0,
    price: 0,
    stock: 0
  };

  genres: any[]=[];
  publishers: any[]=[];

  constructor(private bookService: BookService, private router: Router) {}


  ngOnInit(): void {
    this.bookService.getGenres().subscribe(data => this.genres=data);
    this.bookService.getPublishers().subscribe(data => this.publishers=data);
  }

  submit(): void{
    this.bookService.addBook(this.book).subscribe({
      next: () => {
        alert('Книга успешно добавлена!');
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        alert('Ошибка при добавлении книги: '+JSON.stringify(err.error));
      }
    });
  }

}
