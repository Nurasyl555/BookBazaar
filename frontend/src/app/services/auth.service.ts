import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL='http://127.0.0.1:8000/api/auth/';

  constructor(private http: HttpClient) { }

  register(user: {username: string, password: string, role: string}): Observable<any>{
    return this.http.post(`${this.BASE_URL}register/`, user);
  }

  login(credentials: {username: string; password: string}): Observable<any>{
    return this.http.post(`${this.BASE_URL}login/`, credentials);
  }

  saveToken(token: string){
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('access_token');
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean{
    return this.getToken() !== null;
  }

  getUserInfo(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/profile/');
  }
}
