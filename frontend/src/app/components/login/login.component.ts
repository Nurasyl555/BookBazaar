import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user={
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.logout();
    this.authService.login(this.user).subscribe({
      next: (response) =>{
        this.authService.saveToken(response.access);
        alert('Вы успешно вошли!');
        this.router.navigate(['/']);

      },
      error: (err) => {
        alert('Ошибка входа: '+ JSON.stringify(err.error));
      }
    });
  }

}
