import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-title',
  standalone: true,
  imports: [],
  templateUrl: './hero-title.component.html',
  styleUrl: './hero-title.component.css'
})
export class HeroTitleComponent {
  @Input() title: string = 'Hero Title';
}
