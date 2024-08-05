import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  standalone: true,
  imports: [],
  template: `
  <figure class="max-w-20 max-h-20 bg-theme-400 dark:bg-theme-400-dark object-center rounded-full p-5 overflow-hidden">
  <img [src]="url()" [alt]="alt()" class="rounded-full" />
</figure>
`
})
export class AvatarComponent {
  url = input<string>("");
  alt = input<string>("Avatar image");
}
