import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ApiService } from '../../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { JobsData } from '../../components/hero-jobs/hero-jobs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  template: `
    <app-hero-jobs [jobsData]="jobsData$ | async"></app-hero-jobs>
  `
})
export class JobsPageComponent implements OnInit {
  jobsData$ = new BehaviorSubject<JobsData>({} as JobsData);
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLanguageData<JobsData>('experiences').subscribe(data => {
      this.jobsData$.next(data);
    })
  }
}
