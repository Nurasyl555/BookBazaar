import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';           // ✅ для *ngIf
import { RouterModule } from '@angular/router';           // ✅ для routerLink
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],                 // ✅ добавили модули
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}        // public — чтобы использовать в шаблоне

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get isAdmin(): boolean {
    const token = this.authService.getToken();
    return token !== null && token.includes('admin');
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
