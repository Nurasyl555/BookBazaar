import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'register', 
        loadComponent: () =>
            import('./components/register/register.component').then(m => m.RegisterComponent)
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login',
        loadComponent: () =>
            import('./components/login/login.component').then(m=>m.LoginComponent)
    },
    {path: 'profile',
        loadComponent: () =>
            import('./components/profile/profile.component').then(m => m.ProfileComponent)
    },
    {path: 'add-book',
        loadComponent: () =>
            import('./components/add-book/add-book.component').then(m => m.AddBookComponent)
    },
    {path: 'edit-book/:id',
        loadComponent: () =>
            import('./components/edit-book/edit-book.component').then(m => m.EditBookComponent)
    },
    {path: 'admin',
        loadComponent: () => 
            import('./components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
    },
];

