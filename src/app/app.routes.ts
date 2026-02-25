import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsPageFilteredComponent } from './pages/projects-page-filtered/projects-page-filtered.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'profile',
        component: ProfilePageComponent
    },
    {
        path: 'about',
        component: AboutPageComponent
    },
    {
        path: 'experiences',
        component: JobsPageComponent
    },
    {
        path: 'projects',
        component: ProjectsPageComponent
    },
    {
        path: 'projects/:tech',
        component: ProjectsPageFilteredComponent
    },
    {
        path: 'testimonials',
        component: TestimonialsComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
