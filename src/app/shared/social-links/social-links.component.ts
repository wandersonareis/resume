import { Component, computed, inject, input } from '@angular/core';
import { IconComponent } from '../icons/icon/icon';
import { IconService } from '../../services/icon.service';
import { SafeHtml } from '@angular/platform-browser';

export interface SocialLink {
  text: string;
  url: string;
  icon: string;
}

export interface Social {
  text?: string;
  links: SocialLink[];
}

interface ResolvedLink {
  url: string;
  text: string;
  isSvg: boolean;
  svgContent?: SafeHtml;
  iconName?: string;
}

@Component({
  selector: 'social-links',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="inline-flex space-x-3 items-center overflow-hidden">
      @for (link of resolvedLinks(); track $index) {
        <a
          [href]="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center hover:scale-125 w-8 h-8 rounded-sm"
        >
          @if (link.isSvg) {
            <!-- SVG vem diretamente da API com dimensões embutidas -->
            <span class="block size-6" [innerHTML]="link.svgContent"></span>
          } @else {
            <!-- TODO: atualizar API para enviar SVG literal ou nome mapeado em app-icon -->
            <app-icon [name]="link.iconName!" width="24px" height="24px" />
          }
        </a>
      }
    </div>
  `,
})
export class SocialLinksComponent {
  private _iconService = inject(IconService);

  links = input<SocialLink[] | undefined>([]);

  resolvedLinks = computed<ResolvedLink[]>(() =>
    (this.links() ?? []).map((link) => {
      if (link.icon.trimStart().startsWith('<svg')) {
        const normalized = link.icon
          .replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill="currentColor"')
          .replace(/stroke="#[0-9a-fA-F]{3,6}"/g, 'stroke="currentColor"');
        return {
          url: link.url,
          text: link.text,
          isSvg: true,
          svgContent: this._iconService.sanitize(normalized),
        };
      }
      const name = link.icon.includes(':')
        ? link.icon.split(':')[1]
        : link.icon;
      return { url: link.url, text: link.text, isSvg: false, iconName: name };
    }),
  );
}
