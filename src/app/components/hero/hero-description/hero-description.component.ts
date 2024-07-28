import { Component, input, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'hero-descriptions',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
<markdown-list [items]="descriptions()" class="flex flex-col gap-2" />
`
})
export class HeroDescriptionComponent {
  descriptions = input<string[]>([])
}
