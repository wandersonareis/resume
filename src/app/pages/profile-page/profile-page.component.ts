import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HeroCardData } from '../../components/hero/hero.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { HeroSkillsData } from '../../components/hero-skills/hero-skills.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule,
],
  template: `
  <app-hero [heroCardData]="heroCardData$ | async" />
  <app-hero-skills [skillsData]="skillsData$ | async" />
  `
})
export class ProfilePageComponent implements OnInit {
  heroCardData$ = new BehaviorSubject<HeroCardData>({} as HeroCardData);

  skillsData$ = new BehaviorSubject<HeroSkillsData>({} as HeroSkillsData);

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLanguageData<HeroCardData>('profile').subscribe(data => {
      this.heroCardData$.next(data);
    });

    this.apiService.getLanguageData<HeroSkillsData>('skills').subscribe(
      (data: HeroSkillsData) => {
        this.skillsData$.next(data)
      })
  }
}
