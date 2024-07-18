import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'hero-location',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './hero-location.component.html',
  styleUrl: './hero-location.component.css'
})
export class HeroLocationComponent {
  @Input() location!: HeroLocation;
}

export interface HeroLocation {
  text: string;
  icon: string;
}