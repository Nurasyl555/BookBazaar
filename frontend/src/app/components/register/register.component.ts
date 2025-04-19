import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    role: 'buyer'  // важно! Используй 'buyer' или 'seller' — смотри на model.py
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void {
    if (!this.user.username || !this.user.password || !this.user.role) {
      alert('Заполните все поля');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Регистрация прошла успешно!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Ошибка регистрации:', err);
        const errorText = err.error?.detail || JSON.stringify(err.error);
        alert('Ошибка регистрации: ' + errorText);
      }
    });
  }
}
