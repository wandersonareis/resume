import { Component, input } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { IconModule } from '../../../../projects/icon/src/public-api';

@Component({
  selector: 'copy-button',
  standalone: true,
  imports: [
    IconModule,
    ClipboardModule
  ],
  template: `
  <icon
  [cdkCopyToClipboard]="target()"
  [name]="icon()"
  size="32"
  class="text-theme-600 dark:text-theme-500-dark hover:text-theme-500 dark:hover:text-theme-600 cursor-pointer"
></icon>
`
})
export class CopyButtonComponent {
  target = input<string>('');
  icon = input<string>('ph:copy');
}
