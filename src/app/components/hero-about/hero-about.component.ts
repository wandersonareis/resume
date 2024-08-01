import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AboutQuickFacts, HeroAboutQuickFactsComponent } from './hero-about-quick-facts/hero-about-quick-facts.component';
import { Image } from '../../shared/picture/picture.component';

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
export interface HeroAboutData {
  title: string;
  description: AboutDescription;
  image: Image;
  quickFacts: AboutQuickFacts;
  thanks: string;
}