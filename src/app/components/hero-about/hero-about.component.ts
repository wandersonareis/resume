import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroAboutQuickFactsComponent } from './hero-about-quick-facts/hero-about-quick-facts.component';
import { HeroAboutPictureComponent } from './hero-about-picture/hero-about-picture.component';
import { HeroAboutDescriptionComponent } from './hero-about-description/hero-about-description.component';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-hero-about',
  standalone: true,
  imports: [
    SharedModule,
    HeroAboutPictureComponent,
    HeroAboutDescriptionComponent,
    HeroAboutQuickFactsComponent
  ],
  templateUrl: './hero-about.component.html',
  styleUrl: './hero-about.component.css'
})
export class HeroAboutComponent {
  heroAboutData!: HeroAboutData;

  constructor(private translateService: TranslocoService) {
    this.translateService.selectTranslateObject<HeroAboutData>('about').subscribe(
      (data: HeroAboutData) => {
      this.heroAboutData = data
    })
  }
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