import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroProjectsComponent } from './components/hero-projects/hero-projects.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'projects/:tech',
        component: HeroProjectsComponent
    },
    {
        path: 'projects',
        component: HeroProjectsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
