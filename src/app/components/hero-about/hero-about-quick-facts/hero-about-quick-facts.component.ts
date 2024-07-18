import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-about-quick-facts-list',
  standalone: true,
  imports: [],
  templateUrl: './hero-about-quick-facts.component.html',
  styleUrl: './hero-about-quick-facts.component.css'
})
export class HeroAboutQuickFactsComponent {
  @Input() facts: string[] = [];
}
