import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-project-image',
  standalone: true,
  imports: [],
  templateUrl: './hero-project-image.component.html',
  styleUrl: './hero-project-image.component.css'
})
export class HeroProjectImageComponent {
  @Input() url!: string;
  @Input() alt: string = "Project picture";
}
