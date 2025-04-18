import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
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
  user={
    username: '',
    password: '',
    role: 'customer' //возможно поменяю
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register(): void{
    if(!this.user.username || !this.user.password){
      alert('Введите все поля');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Регистрация успешна!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Ошибка регистрации: '+JSON.stringify(err.error));
      }
    });
  }

}
