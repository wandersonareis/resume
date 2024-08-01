import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'cv-image',
  standalone: true,
  imports: [],
  template: `
  @if (image()?.url) {
  <figure class="max-w-md">
    <img [src]="image()?.url" [alt]="image()?.alt || 'My picture'" />
  </figure>
  }
`
})
export class PictureComponent {
  image = input<Image | undefined>();
}

export type Image = {
  url: string;
  alt?: string;
}