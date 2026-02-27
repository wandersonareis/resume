import { Component, input } from '@angular/core';
import { Social } from '../../shared/social-links/social-links.component';
import { Image } from '../../shared/picture/picture.component';
import { MarkdownListComponent } from '../../shared/markdown/markdown.component';
import { SocialLinksComponent } from '../../shared/social-links/social-links.component';
import { PictureComponent } from '../../shared/picture/picture.component';
import { LucideAngularModule, MapPin } from 'lucide-angular';

@Component({
  selector: 'hero-location',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="flex justify-center md:justify-start items-center space-x-1">
      <lucide-icon
        [img]="mapPinIcon"
        [size]="16"
        [strokeWidth]="1.5"
        class="text-theme-600 dark:text-theme-600-dark"
      />
      <span>{{ location()?.text }}</span>
    </div>
  `,
})
export class HeroLocationComponent {
  readonly mapPinIcon = MapPin;
  location = input<HeroLocation | undefined>({} as HeroLocation);
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeroLocationComponent,
    MarkdownListComponent,
    SocialLinksComponent,
    PictureComponent,
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  heroCardData = input<HeroCardData | null>({} as HeroCardData);
}

export interface HeroCardData {
  title: string;
  descriptions: string[];
  image: Image;
  location: HeroLocation;
  social: Social;
}

export interface HeroLocation {
  text: string;
  icon: string;
}
