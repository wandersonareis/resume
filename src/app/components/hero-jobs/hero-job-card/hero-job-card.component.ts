import { Component, input } from '@angular/core';
import { HeroJobCardHeaderComponent } from '../hero-job-card-header/hero-job-card-header.component';
import { HeroJobCardDescriptionsListComponent } from '../hero-job-card-descriptions-list/hero-job-card-descriptions-list.component';
import { HeroJob } from '../hero-job.model';

@Component({
  selector: 'hero-job-card',
  standalone: true,
  imports: [HeroJobCardHeaderComponent, HeroJobCardDescriptionsListComponent],
  template: `
    <article
      class="flex flex-col p-8 gap-4 dark:bg-gray-800 rounded-xl shadow-md"
    >
      <hero-job-card-header [job]="job()" />
      <hero-job-card-descriptions-list [job]="job()" />
    </article>
  `,
})
export class HeroJobCardComponent {
  job = input<HeroJob>({} as HeroJob);
}
