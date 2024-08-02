import { Component, input, Input } from '@angular/core';
import { IconModule } from '../../../../projects/icon/src/public-api';

export interface SocialLink {
  text: string;
  url: string;
  icon: string;
}

export interface Social {
  text?: string;
  links: SocialLink[];
}

@Component({
  selector: 'social-links',
  standalone: true,
  imports: [
    IconModule
  ],
  template: `
  <div class="inline-flex space-x-3 items-center overflow-hidden">
  @for (link of links(); track $index) {
  <a
    [href]="link.url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center justify-center hover:scale-125 hover:text-theme-900 hover:dark:text-theme-900-dark w-8 h-8 rounded-sm"
  >
    <icon name="{{ link.icon }}"></icon>
  </a>
  }
</div>
  `
})
export class SocialLinksComponent {
  links = input<SocialLink[] | undefined>([]);
}
