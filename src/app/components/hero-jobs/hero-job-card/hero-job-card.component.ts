import { Component, Input } from '@angular/core';
import { HeroJobCardHeaderComponent } from '../hero-job-card-header/hero-job-card-header.component';
import { HeroJobCardDescriptionsListComponent } from '../hero-job-card-descriptions-list/hero-job-card-descriptions-list.component';

@Component({
  selector: 'hero-job-card',
  standalone: true,
  imports: [
    HeroJobCardHeaderComponent,
    HeroJobCardDescriptionsListComponent
  ],
  templateUrl: './hero-job-card.component.html',
  styleUrl: './hero-job-card.component.css'
})
export class HeroJobCardComponent {
  @Input() job!: HeroJob;
}

export interface HeroJob {
  company: string;
  companyLogo: string;
  title: string;
  duration: string;
  descriptions: string[];
}