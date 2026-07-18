import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
    title: 'Rigid Contracting | Central Kentucky Construction',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services-page').then((m) => m.ServicesPage),
    title: 'Services | Rigid Contracting',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects-page').then((m) => m.ProjectsPage),
    title: 'Projects | Rigid Contracting',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
    title: 'About Us | Rigid Contracting',
  },
  {
    path: 'AboutUs',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page').then((m) => m.ContactPage),
    title: 'Contact Us | Rigid Contracting',
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews-page').then((m) => m.ReviewsPage),
    title: 'Reviews | Rigid Contracting',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
