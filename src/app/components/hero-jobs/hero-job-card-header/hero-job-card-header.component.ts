import { Component, input } from '@angular/core';
import { HeroJob } from '../hero-job.model';

@Component({
  selector: 'hero-job-card-header',
  standalone: true,
  imports: [],
  templateUrl: './hero-job-card-header.component.html',
})
export class HeroJobCardHeaderComponent {
  job = input<HeroJob>({} as HeroJob);
}
