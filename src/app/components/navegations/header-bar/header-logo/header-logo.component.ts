import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'header-logo',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ],
  template: `
  <div class="flex items-center space-x-4">
  <a [routerLink]="routerLink()" class="flex items-center space-x-3">
    @if (label()) {
    <span
      class="self-center text-2xl font-semibold whitespace-nowrap text-theme-600 dark:text-theme-50"
      >{{ label() }}</span
    >
    }
  </a>
  <language-selector />
</div>
`
})
export class HeaderLogoComponent {
  logo = input<string | undefined>();
  label = input<string | undefined>();
  routerLink = input<string | undefined>();
}
