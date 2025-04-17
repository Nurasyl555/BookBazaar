import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private BASE_URL = 'http://localhost:8000/api/books/';  

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BASE_URL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.BASE_URL}${id}/`);
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.BASE_URL}?search=${query}`);
  }
  
  getBooksByFilter(genre?: string, publisher?: string): Observable<Book[]> {
    let params: string[] = [];
    if (genre) params.push(`genre=${genre}`);
    if (publisher) params.push(`publisher=${publisher}`);
    const queryString = params.length ? '?' + params.join('&') : '';
    return this.http.get<Book[]>(`${this.BASE_URL}${queryString}`);
  }
  
}
