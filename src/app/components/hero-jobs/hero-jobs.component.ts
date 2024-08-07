import { Component, inject, input, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroJobCardComponent } from './hero-job-card/hero-job-card.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-hero-jobs',
  standalone: true,
  imports: [
    SharedModule,
    HeroJobCardComponent
  ],
  templateUrl: './hero-jobs.component.html'
})
export class HeroJobsComponent {
  apiService = inject(ApiService);
  jobsData = input<JobsData | null>({} as JobsData);

}

type Job = {
  company: string;
  companyLogo: string;
  title: string;
  duration: string;
  descriptions: string[]
}

export interface JobsData {
  title: string;
  description: string;
  jobs: Job[];
}