import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { TranslocoService } from '@jsverse/transloco';
import { HeroAboutData } from '../../components/hero-about/hero-about.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  template: `
  <app-hero-about [aboutData]="aboutData$ | async" />
  `
})
export class AboutPageComponent {

  aboutData$ = new BehaviorSubject<HeroAboutData>({} as HeroAboutData);

  constructor(private translateService: TranslocoService) {
    this.translateService.selectTranslateObject<HeroAboutData>('about').subscribe(
      (data: HeroAboutData) => {
        this.aboutData$.next(data)
      })
  }
}
