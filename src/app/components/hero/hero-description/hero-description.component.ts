import { Component, Input } from '@angular/core';
import { MarkdownPipe } from '../../../shared/pipes/markdown.pipe';

@Component({
  selector: 'hero-description',
  standalone: true,
  imports: [
    MarkdownPipe
  ],
  template: `
  <div>
  @for (line of descriptions; track $index) {
  <p class="text-justify text-base mb-2">{{ line | markdown }}</p>
  }
</div>
`
})
export class HeroDescriptionComponent {
  @Input() descriptions: string[] = [];
}
