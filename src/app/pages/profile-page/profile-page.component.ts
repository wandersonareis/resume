import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HeroCardData } from '../../components/hero/hero.component';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ComponentsModule
  ],
  template: `
  <app-hero [heroCardData]="heroCardData" />
  `
})
export class ProfilePageComponent {
  heroCardData!: HeroCardData;
  constructor(private translateService: TranslocoService) {
    this.translateService.selectTranslateObject<HeroCardData>('profile').subscribe(
      (data: HeroCardData) => {
        this.heroCardData = data
      })
  }
}
