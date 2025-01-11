import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { ApiService } from '../../services/api.service';
import { BehaviorSubject } from 'rxjs';
import { JobsData } from '../../components/hero-jobs/hero-jobs.component';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  template: `
    <app-hero-jobs [jobsData]="jobsData()"></app-hero-jobs>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsPageComponent implements OnInit {
  jobsData$ = new BehaviorSubject<JobsData>({} as JobsData);
  jobsData = signal<JobsData>({} as JobsData);
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLanguageData<JobsData>('experiences').subscribe(this.jobsData.set);
  }
}
