import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'cv-image',
  standalone: true,
  imports: [],
  template: `
  @if (url()) {
    <figure class="max-w-md">
    <img [src]="url()" [alt]="alt()" />
</figure>
  }
`
})
export class PictureComponent {
  url = input<string | undefined>();
  alt = input<string>("Hero Image");
}
