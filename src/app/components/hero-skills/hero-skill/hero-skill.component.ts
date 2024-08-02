import { Component, input, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'hero-skill',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
  <div
  class="flex flex-col items-center p-2 rounded-md gap-2"
>
  @if (skill()) {
  <icon [name]="skill()?.icon" [size]="iconSizeDefault" class="text-theme- dark:text-theme-900-dark"></icon>
  <span class="text-lg font-normal">{{ skill()?.name }}</span>
  } @else {
  <p>No skills</p>
  }
</div>
`
})
export class HeroSkillComponent {
  skill = input<Skill>();
  iconSizeDefault: number = this.skill()?.iconSize ?? 75;
}

export type Skill = { name: string, icon: string, iconSize?: number };