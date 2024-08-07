import { Component, input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hero-project-techs',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ],
  template: `
  <div class="flex flex-wrap gap-2">
  @for (tech of technologies(); track $index) {
  <a type="button" [routerLink]="['/projects', tech]">
    <badge [label]="tech" />
  </a>
  }
</div>
`
})
export class HeroProjectTechsComponent {
  technologies = input<string[] | undefined>();
}
