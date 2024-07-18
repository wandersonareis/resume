import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ApiService } from '../../services/api.service';
import { HeroAboutQuickFactsComponent } from './hero-about-quick-facts/hero-about-quick-facts.component';
import { HeroAboutPictureComponent } from './hero-about-picture/hero-about-picture.component';
import { HeroAboutDescriptionComponent } from './hero-about-description/hero-about-description.component';

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

  constructor(private apiService: ApiService) {
    this.apiService.getHeroAboutData<HeroAboutData>().subscribe(data => {
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