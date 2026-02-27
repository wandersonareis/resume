import { Component, input } from '@angular/core';
import { LucideAngularModule, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'external-link-button',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- TODO: adicionar 'external-link' na API icon para substituir o SVG hardcoded -->
    <a type="button" [href]="link()" target="_blank">
      <lucide-icon
        [img]="externalLinkIcon"
        [size]="16"
        [strokeWidth]="1.5"
        class="text-current stroke-theme-600 hover:stroke-theme-800 dark:hover:stroke-theme-600-dark p-1"
      />
    </a>
  `,
})
export class ExternalLinkButtonComponent {
  link = input<string | undefined>();
  // TODO: quando a API enviar 'external-link' como nome de ícone, usar app-icon dinamicamente
  readonly externalLinkIcon = ExternalLink;
}
