import { Component, Input } from '@angular/core';
import { HeroJob } from '../hero-job-card/hero-job-card.component';

@Component({
  selector: 'hero-job-card-descriptions-list',
  standalone: true,
  imports: [],
  templateUrl: './hero-job-card-descriptions-list.component.html',
  styleUrl: './hero-job-card-descriptions-list.component.css'
})
export class HeroJobCardDescriptionsListComponent {
  @Input() job!: HeroJob;
}
