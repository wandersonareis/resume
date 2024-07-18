import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SharedModule } from '../../shared/shared.module';
import { HeroJobCardComponent } from './hero-job-card/hero-job-card.component';

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

  constructor(private apiService: ApiService) {
    this.apiService.getHeroJobsData<JobsData>().subscribe(data => {
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