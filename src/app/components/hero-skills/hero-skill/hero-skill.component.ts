import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'hero-skill',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './hero-skill.component.html',
  styleUrl: './hero-skill.component.css'
})
export class HeroSkillComponent {
  @Input() name!: string;
  @Input() icon!: string;
  @Input() iconSize: number = 75;
}
