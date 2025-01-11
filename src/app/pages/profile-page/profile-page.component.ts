import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HeroCardData } from '../../components/hero/hero.component';
import { ApiService } from '../../services/api.service';
import { HeroSkillsData } from '../../components/hero-skills/hero-skills.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    ComponentsModule,
  ],
  template: `
  <app-hero [heroCardData]="heroCardData()" />
  <app-hero-skills [skillsData]="skillsData()" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {
  apiService = inject(ApiService);
  
  heroCardData = signal<HeroCardData>({} as HeroCardData);
  skillsData = signal<HeroSkillsData>({} as HeroSkillsData);

  ngOnInit(): void {
    this.apiService.getLanguageData<HeroCardData>('profile').subscribe(this.heroCardData.set);

    this.apiService.getLanguageData<HeroSkillsData>('skills').subscribe(this.skillsData.set);
  }
}
