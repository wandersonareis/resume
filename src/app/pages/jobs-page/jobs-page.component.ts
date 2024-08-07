import { Component, OnInit, signal } from '@angular/core';
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
    <app-hero-jobs [jobsData]="jobsData()"></app-hero-jobs>
  `
})
export class JobsPageComponent implements OnInit {
  jobsData$ = new BehaviorSubject<JobsData>({} as JobsData);
  jobsData = signal<JobsData>({} as JobsData);
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLanguageData<JobsData>('experiences').subscribe(this.jobsData.set);
  }
}
