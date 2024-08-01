import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroSkillsComponent } from './components/hero-skills/hero-skills.component';
import { HeroJobsComponent } from './components/hero-jobs/hero-jobs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsPageFilteredComponent } from './pages/projects-page-filtered/projects-page-filtered.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
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
        path: 'skills',
        component: HeroSkillsComponent
    },
    {
        path: 'experiences',
        component: HeroJobsComponent
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
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
