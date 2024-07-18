import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-about-description',
  standalone: true,
  imports: [],
  templateUrl: './hero-about-description.component.html',
  styleUrl: './hero-about-description.component.css'
})
export class HeroAboutDescriptionComponent {
  @Input() descriptions: string[] = [];
}
