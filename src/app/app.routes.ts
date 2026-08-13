import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
        title: 'Rigid Contracting - Home'
    },
    {
        path: 'AboutUs',
        loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
        title: 'Rigid Contracting - About Us'
    },
    {
        path: 'Projects',
        loadComponent: () => import('./pages/projects-page/projects-page').then((m) => m.ProjectsPage),
        title: 'Rigid Contracting - Projects'
    },
];
