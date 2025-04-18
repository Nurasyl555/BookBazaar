import { Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void{
    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.user=data;
      },
      error: (err) => {
        console.error('Ошибка получения профиля: ', err);
      }
    });
  }

}
