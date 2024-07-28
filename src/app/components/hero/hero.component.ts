import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Social } from '../../shared/social-links/social-links.component';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'hero-image',
  standalone: true,
  imports: [],
  template: `
  <Figure class="max-w-md">
  <img [src]="url()" [alt]="alt()" />
</Figure>
`
})
export class HeroImageComponent {
  url = input<string | undefined>("assets/images/hero.png")
  alt = input<string>("Hero Image")
}

@Component({
  selector: 'hero-location',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
  <div class="flex justify-center md:justify-start items-center space-x-1">
  <icon [name]="location().icon" />
  <span>{{ location().text }}</span>
</div>
`
})
export class HeroLocationComponent {
  location = input<HeroLocation>({} as HeroLocation);
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
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

export interface HeroLocation {
  text: string;
  icon: string;
}