import { Component, input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'title-and-description',
  standalone: true,
  imports: [
    BadgeComponent
  ],
  template: `
  <div class="flex flex-col items-center gap-4">
  <badge [label]="title()" />
  @if (description()) {
  <p class="text-xl text-center font-normal max-w-[34rem]">
    {{ description() }}
  </p>
  }
</div>
`
})
export class TitleAndDescriptionComponent {
  title = input<string | undefined>()
  description = input<string | undefined>()
}
