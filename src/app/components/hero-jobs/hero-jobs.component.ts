import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroJobCardComponent } from './hero-job-card/hero-job-card.component';
import { TranslocoService } from '@jsverse/transloco';

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

  constructor(private translateService: TranslocoService) {
    this.translateService.selectTranslateObject<JobsData>('experiences').subscribe(
      (data: JobsData) => {
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