import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { HeroCardData } from '../../components/hero/hero.component';
import { TranslocoService } from '@jsverse/transloco';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  template: `
  <app-hero [heroCardData]="heroCardData$ | async" />
  `
})
export class ProfilePageComponent implements OnInit {
  heroCardData$ = new BehaviorSubject<HeroCardData>({} as HeroCardData);

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLanguageData<HeroCardData>('profile').subscribe(data => {
      this.heroCardData$.next(data);
    });
  }
}
