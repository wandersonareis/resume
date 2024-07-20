import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroProjectsComponent } from './components/hero-projects/hero-projects.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroAboutComponent } from './components/hero-about/hero-about.component';
import { HeroSkillsComponent } from './components/hero-skills/hero-skills.component';
import { HeroJobsComponent } from './components/hero-jobs/hero-jobs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: HeroComponent
    },
    {
        path: 'about',
        component: HeroAboutComponent
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
        path: 'projects/:tech',
        component: HeroProjectsComponent
    },
    {
        path: 'projects',
        component: HeroProjectsComponent
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
