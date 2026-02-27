import { Component, computed, inject, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconService } from '../../../services/icon.service';

@Component({
  selector: 'hero-skill',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="flex flex-col items-center p-2 rounded-md gap-2">
      @if (skill()) {
        <div
          [innerHTML]="svgIcon()"
          [style.width.px]="iconSizeDefault()"
          [style.height.px]="iconSizeDefault()"
          class="flex items-center justify-center"
          [ngClass]="
            skill()?.invertOnDark === true
              ? 'text-gray-900 dark:invert dark:text-white'
              : ''
          "
        ></div>
        <span class="text-lg font-normal">{{ skill()?.name }}</span>
      } @else {
        <p>No skills</p>
      }
    </div>
  `,
})
export class HeroSkillComponent {
  private _iconService = inject(IconService);
  skill = input<Skill>();
  readonly iconSizeDefault = computed(() => this.skill()?.iconSize ?? 75);
  readonly svgIcon = computed(() =>
    this._iconService.sanitize(this.skill()?.icon ?? ''),
  );
}

export type Skill = {
  name: string;
  icon: string;
  iconSize?: number;
  invertOnDark?: boolean;
};
