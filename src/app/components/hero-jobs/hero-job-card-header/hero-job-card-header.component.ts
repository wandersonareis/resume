import { Component, Input } from '@angular/core';
import { HeroJob } from '../hero-job-card/hero-job-card.component';

@Component({
  selector: 'hero-job-card-header',
  standalone: true,
  imports: [],
  templateUrl: './hero-job-card-header.component.html',
  styleUrl: './hero-job-card-header.component.css'
})
export class HeroJobCardHeaderComponent {
  @Input() job!: HeroJob;
}
