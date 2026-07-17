import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { AboutUs } from './pages/about-us/about-us';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Rigid Contracting'
    },
    {
        path: 'AboutUs',
        component: AboutUs,
        title: 'About Us'
    },
];
