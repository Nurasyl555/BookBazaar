import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private BASE_URL = 'http://127.0.0.1:8000/api/books';  // ✅ без / на конце

  constructor(private http: HttpClient) {}

  getGenres(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/genres/`);
  }

  getPublishers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/publishers/`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.BASE_URL}/${id}/`);
  }

  addBook(bookData: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/`, bookData); // ✅ просто /, т.к. BASE_URL — уже /books
  }

  updateBook(id: number, bookData: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${id}/`, bookData);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.BASE_URL}/`);
  }

  getBooksByFilter(genre?: string, publisher?: string): Observable<Book[]> {
    let params: string[] = [];
    if (genre) params.push(`genre=${genre}`);
    if (publisher) params.push(`publisher=${publisher}`);
    const queryString = params.length ? '?' + params.join('&') : '';
    return this.http.get<Book[]>(`${this.BASE_URL}/${queryString}`);
  }

  getBooksSorted(orderBy: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.BASE_URL}/?ordering=${orderBy}`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}/`);
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.BASE_URL}/?search=${query}`);
  }
}
