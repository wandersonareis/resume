import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-image',
  standalone: true,
  imports: [],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.css'
})
export class HeroImageComponent {
  @Input() url: string = '';
  @Input() alt: string = 'Hero Image';
}