import { Component, input } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { LucideAngularModule, Copy } from 'lucide-angular';

@Component({
  selector: 'copy-button',
  standalone: true,
  imports: [ClipboardModule, LucideAngularModule],
  template: `
    <!-- TODO: adicionar 'copy' na API icon para substituir o SVG hardcoded -->
    <lucide-icon
      [img]="copyIcon"
      [size]="32"
      [strokeWidth]="1.5"
      class="text-theme-600 dark:text-theme-500-dark hover:text-theme-500 dark:hover:text-theme-600 cursor-pointer"
    />
  `,
})
export class CopyButtonComponent {
  target = input<string>('');
  // TODO: quando a API enviar 'copy' como nome de ícone, usar app-icon dinamicamente
  readonly copyIcon = Copy;
}
