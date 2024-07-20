import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroJobCardComponent } from './hero-job-card/hero-job-card.component';
import { HeroJobsService } from './services/hero-jobs.service';

@Component({
  selector: 'app-hero-jobs',
  standalone: true,
  imports: [
    SharedModule,
    HeroJobCardComponent
  ],
  templateUrl: './hero-jobs.component.html',
  styleUrl: './hero-jobs.component.css'
})
export class HeroJobsComponent {
  jobsData!: JobsData;

  constructor(private jobsService: HeroJobsService) {
    this.jobsService.getHeroJobsData<JobsData>().subscribe(data => {
      this.jobsData = data
    })
  }
}

type Job = {
  company: string;
  companyLogo: string;
  title: string;
  duration: string;
  descriptions: string[]
}

interface JobsData {
  title: string;
  description: string;
  jobs: Job[];
}