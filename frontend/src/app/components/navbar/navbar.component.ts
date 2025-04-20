import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get isAdmin(): boolean {
    // временно просто проверка по username, позже можно заменить
    const token = this.authService.getToken();
    return token !== null && token.includes('admin'); // пример
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
