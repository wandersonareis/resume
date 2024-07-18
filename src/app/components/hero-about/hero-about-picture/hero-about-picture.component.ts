import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-about-picture',
  standalone: true,
  imports: [],
  templateUrl: './hero-about-picture.component.html',
  styleUrl: './hero-about-picture.component.css'
})
export class HeroAboutPictureComponent {
  @Input() url!: string;
  @Input() alt: string = "Hero Image";
}
