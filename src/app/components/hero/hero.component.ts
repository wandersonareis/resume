import { Component } from '@angular/core';
import { Social } from '../../shared/social-links/social-links.component';
import { HeroLocation, HeroLocationComponent } from './hero-location/hero-location.component';
import { SharedModule } from '../../shared/shared.module';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { HeroDescriptionComponent } from './hero-description/hero-description.component';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeroTitleComponent,
    HeroDescriptionComponent,
    HeroLocationComponent,
    HeroImageComponent,
    SharedModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroCardData!: HeroCardData;
  constructor(private translateService: TranslocoService) {
    this.translateService.selectTranslateObject<HeroCardData>('profile').subscribe(
      (data: HeroCardData) => {
      this.heroCardData = data
    })
  }
}

export interface HeroCardData {
  title: string;
  descriptions: string[];
  heroImage: string;
  location: HeroLocation;
  social: Social;
}