import { Component, input } from '@angular/core';
import { HeroJob } from '../hero-job-card/hero-job-card.component';

@Component({
  selector: 'hero-job-card-descriptions-list',
  standalone: true,
  imports: [],
  template: `
  <ul class="self-center ps-5 gap-1">
  @for (description of job().descriptions; track $index) {
  <li class="list-disc text-base">{{ description }}</li>
  }
</ul>`,
})
export class HeroJobCardDescriptionsListComponent {
  job = input<HeroJob>({} as HeroJob);
}
