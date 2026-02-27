import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from '../../../shared/badge/badge.component';

@Component({
  selector: 'hero-project-techs',
  standalone: true,
  imports: [RouterModule, BadgeComponent],
  template: `
    <div class="flex flex-wrap gap-2">
      @for (tech of technologies(); track $index) {
        <a type="button" [routerLink]="['/projects', tech]">
          <badge [label]="tech" />
        </a>
      }
    </div>
  `,
})
export class HeroProjectTechsComponent {
  technologies = input<string[] | undefined>();
}
