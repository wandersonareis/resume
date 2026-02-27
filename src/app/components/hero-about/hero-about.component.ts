import { Component, input } from '@angular/core';
import {
  AboutQuickFacts,
  HeroAboutQuickFactsComponent,
} from './hero-about-quick-facts/hero-about-quick-facts.component';
import { Image } from '../../shared/picture/picture.component';
import { TitleAndDescriptionComponent } from '../../shared/title-and-description/title-and-description.component';
import { PictureComponent } from '../../shared/picture/picture.component';
import { MarkdownListComponent } from '../../shared/markdown/markdown.component';

@Component({
  selector: 'app-hero-about',
  standalone: true,
  imports: [
    TitleAndDescriptionComponent,
    PictureComponent,
    MarkdownListComponent,
    HeroAboutQuickFactsComponent,
  ],
  templateUrl: './hero-about.component.html',
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
