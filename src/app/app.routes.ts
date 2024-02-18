import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/default/default-layout.component').then(c => c.DefaultLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./layouts/auth/auth-layout.component').then(c => c.AuthLayoutComponent),
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/sign-up/sign-up.component').then(c => c.SignUpComponent),
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)
  }
  ];
