import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'champions',
    loadComponent: () => import('./Features/Champions/components/championlist/championlist').then((m) => m.Championlist),
  },
  {
    path: 'home',
    loadComponent: () => import('./Shared/home/home').then((m) => m.Home)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full' // Redirection par défaut utile
  }
];
