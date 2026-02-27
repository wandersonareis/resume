import { Component, computed, input, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Copy,
  Check,
  User,
  Download,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <span
      class="inline-flex items-center justify-center"
      [style.width]="width()"
      [style.height]="height()"
      [class]="className()"
    >
      @if (lucideIcon()) {
        <lucide-icon
          [img]="lucideIcon()!"
          [size]="sizeNumber()"
          [strokeWidth]="1.5"
          class="block"
        />
      }
    </span>
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class IconComponent implements OnInit {
  name = input<string>('');
  width = input<string>('24px');
  height = input<string>('24px');
  className = input<string>('');

  /**
   * Mapa de nomes de ícone → ícone Lucide.
   *
   * Nomes marcados com TODO precisam ser adicionados na API
   * (npoint / transloco) com o valor SVG correspondente, substituindo
   * o identificador Iconify/Phosphor pelo nome aqui registrado.
   */
  private readonly iconMap = new Map<string, LucideIconData>([
    // TODO: adicionar 'copy-light' na API icon (substitui "ph:copy-light")
    ['copy-light', Copy],
    // TODO: adicionar 'copy' na API icon (substitui "ph:copy")
    ['copy', Copy],
    // Já possui SVG no API — mantido como fallback local
    ['check', Check],
    // Já possui SVG no API — mantido como fallback local
    ['user', User],
    // TODO: adicionar 'download' na API icon (substitui "ph:download-simple")
    ['download', Download],
    // TODO: adicionar 'download-simple' na API icon (substitui "ph:download-simple")
    ['download-simple', Download],
    // TODO: adicionar 'location' na API icon (substitui identificador de localização)
    ['location', MapPin],
    // Já possui SVG no API — mantido como fallback local
    ['external-link', ExternalLink],
    // Já possui SVG no API — mantido como fallback local
    ['github', Github],
    // Já possui SVG no API — mantido como fallback local
    ['linkedin', Linkedin],
    // TODO: adicionar 'envelope-simple-light' na API icon (substitui "ph:envelope-simple-light")
    ['envelope-simple-light', Mail],
    // TODO: adicionar 'envelope' na API icon
    ['envelope', Mail],
  ]);

  protected lucideIcon = computed<LucideIconData | undefined>(() => {
    const raw = this.name();
    // suporta formatos "prefix:name" (ex: "ph:download-simple", "simple-icons:github")
    const key = raw.includes(':') ? raw.split(':')[1] : raw;
    const icon = this.iconMap.get(key);
    if (!icon) {
      console.warn(
        `[app-icon] Ícone "${raw}" não mapeado. Adicione em iconMap.`,
      );
    }
    return icon;
  });

  protected sizeNumber = computed<number>(() => {
    return parseInt(this.width().replace('px', ''), 10) || 24;
  });

  ngOnInit(): void {}
}
