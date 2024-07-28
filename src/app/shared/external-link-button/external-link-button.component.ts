import { Component, input, Input } from '@angular/core';
import { IconComponent } from "../../../../projects/icon/src/lib/icon/icon.component";

@Component({
  selector: 'external-link-button',
  standalone: true,
  imports: [IconComponent],
  template: `
  <a type="button" [href]="link()">
  <icon
    name="ci:external-link"
    size="24"
    class="text-theme-600 hover:text-theme-800 dark:hover:text-theme-600-dark"
  ></icon>
</a>
`,
  styleUrl: './external-link-button.component.css'
})
export class ExternalLinkButtonComponent {
  link = input<string | undefined>();
}
