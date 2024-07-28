import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroAboutComponent } from './components/hero-about/hero-about.component';
import { HeroSkillsComponent } from './components/hero-skills/hero-skills.component';
import { HeroJobsComponent } from './components/hero-jobs/hero-jobs.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsPageFilteredComponent } from './pages/projects-page-filtered/projects-page-filtered.component';

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
