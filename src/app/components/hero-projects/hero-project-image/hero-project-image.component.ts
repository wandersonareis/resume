import { Component, input } from '@angular/core';

@Component({
  selector: 'hero-project-image',
  standalone: true,
  imports: [],
  template: `
  <figure
  class="inline-flex w-full h-full items-center p-12 bg-theme-100 dark:bg-theme-200-dark max-w-[30rem]"
>
  <img [src]="url()" [alt]="alt()" class="object-cover rounded-lg" />
</figure>
`
})
export class HeroProjectImageComponent {
  url = input<string | undefined>("assets/images/project-a.png");
  alt = input<string>("Project Image");
}
