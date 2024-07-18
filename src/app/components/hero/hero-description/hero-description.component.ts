import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-description',
  standalone: true,
  imports: [],
  templateUrl: './hero-description.component.html',
  styleUrl: './hero-description.component.css'
})
export class HeroDescriptionComponent {
  @Input() descriptions: string[] = [];
}
