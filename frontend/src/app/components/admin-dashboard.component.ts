import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { BookService } from '../services/book.service'; 

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  books: any[]=[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void{
    this.loadBooks();
  }

  loadBooks(): void{
    this.bookService.getBooks().subscribe((data: any[]) => {
      this.books=data;
    });
  }

  deleteBook(id: number): void{
    if(confirm('Удалить книгу?')){
      this.bookService.deleteBook(id).subscribe(() => {
        this.books=this.books.filter(b=>b.id!==id);
        alert('Книга удалена');
      });
    }
  }

}
