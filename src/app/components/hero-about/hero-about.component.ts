import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroAboutQuickFactsComponent } from './hero-about-quick-facts/hero-about-quick-facts.component';

@Component({
  selector: 'app-hero-about',
  standalone: true,
  imports: [
    SharedModule,
    HeroAboutQuickFactsComponent
  ],
  templateUrl: './hero-about.component.html'
})
export class HeroAboutComponent {
  aboutData = input<HeroAboutData | null>({} as HeroAboutData);
}

type AboutDescription = { title: string; descriptions: string[] };
type AboutQuickFacts = { title: string; facts: string[] };
export interface HeroAboutData {
  title: string;
  description: AboutDescription;
  picture: string;
  quickFacts: AboutQuickFacts;
  thanks: string;
}