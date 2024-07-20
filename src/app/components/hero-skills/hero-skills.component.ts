import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HeroSkillComponent } from './hero-skill/hero-skill.component';
import { SkillsService } from './services/skills.service';

@Component({
  selector: 'app-hero-skills',
  standalone: true,
  imports: [
    SharedModule,
    HeroSkillComponent
  ],
  templateUrl: './hero-skills.component.html',
  styleUrl: './hero-skills.component.css'
})
export class HeroSkillsComponent {
  heroSkillsData!: HeroSkillsData;

  constructor(private skillsService: SkillsService) {
    this.skillsService.getHeroSkillsData<HeroSkillsData>().subscribe(data => {
      this.heroSkillsData = data
    })
  }
}

type Skill = { name: string, icon: string };
export interface HeroSkillsData {
  title: string;
  description: string;
  skills: Skill[];
}