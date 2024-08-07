import { Component, input } from '@angular/core';
import { MailToPipe } from '../pipes/mail-to.pipe';

@Component({
  selector: 'mail-link',
  standalone: true,
  imports: [
    MailToPipe
  ],
  template: `
  <a [href]="mail() | mailTo" class="text-theme-900">
  <h2
    class="hover:text-theme-500 dark:hover:text-theme-600 hover:underline active:text-theme-500 active:underline"
  >
    {{ mail() }}
  </h2>
</a>
  `
})
export class MailLinkComponent {
  mail = input<string>("");
}
