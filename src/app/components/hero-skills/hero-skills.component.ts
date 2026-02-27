import { Component, input } from '@angular/core';
import { HeroSkillComponent } from './hero-skill/hero-skill.component';
import { ApiService } from '../../services/api.service';
import { TitleAndDescriptionComponent } from '../../shared/title-and-description/title-and-description.component';

@Component({
  selector: 'app-hero-skills',
  standalone: true,
  imports: [TitleAndDescriptionComponent, HeroSkillComponent],
  templateUrl: './hero-skills.component.html',
})
export class HeroSkillsComponent {
  skillsData = input<HeroSkillsData | null>({} as HeroSkillsData);
}

type Skill = { name: string; icon: string };
export interface HeroSkillsData {
  title: string;
  description: string;
  skills: Skill[];
}
