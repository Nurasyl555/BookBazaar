import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private BASE_URL='http://127.0.0.1:8000/books/';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/genres/`);
  }

  getPublishers(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/publishers/`);
  }

  addBook(bookData: any): Observable<any>{
    return this.http.post(`${this.BASE_URL}/books/`, bookData);
  }

  getBook(id: number): Observable<any>{
    return this.http.get(`${this.BASE_URL}/books/${id}/`);
  }

  updateBook(id: number, bookData: any): Observable<any>{
    return this.http.put(`${this.BASE_URL}/books/${id}/`, bookData);
  }

  getBooks(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/books/`);
  }

  deleteBook(id: number): Observable<any>{
    return this.http.delete(`${this.BASE_URL}/books/${id}`);
  }
}
