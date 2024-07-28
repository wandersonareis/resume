import { Component, input } from '@angular/core';

@Component({
  selector: 'badge',
  standalone: true,
  imports: [],
  template: `
  <p
  class="text-base font-medium bg-theme-200 dark:bg-theme-200-dark rounded-xl px-5 py-1 max-w-fit"
>
  {{ label() }}
</p>
`,
})
export class BadgeComponent {
  label = input<string | undefined>();
}
