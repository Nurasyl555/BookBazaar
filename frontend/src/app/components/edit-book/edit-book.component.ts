import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']  
})
export class EditBookComponent implements OnInit {
  bookId!: number;
  book: Book = {} as Book;                
  genres: any[] = [];
  publishers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getGenres().subscribe((data: any[]) => this.genres = data);
    this.bookService.getPublishers().subscribe((data: any[]) => this.publishers = data);

    this.bookService.getBookById(this.bookId).subscribe((data: Book) => {
      this.book = data;
    });
  }

  update(): void {
    this.bookService.updateBook(this.bookId, this.book).subscribe({
      next: () => {
        alert('Книга обновлена!');
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        alert('Ошибка при обновлении: ' + JSON.stringify(err.error));
      }
    });
  }
}
