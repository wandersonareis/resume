import { Component, input } from '@angular/core';
import { HeroJob } from '../hero-job-card/hero-job-card.component';

@Component({
  selector: 'hero-job-card-header',
  standalone: true,
  imports: [],
  templateUrl: './hero-job-card-header.component.html',
})
export class HeroJobCardHeaderComponent {
  job = input<HeroJob>({} as HeroJob);
}
