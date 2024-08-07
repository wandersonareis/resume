import { Component, input } from '@angular/core';

@Component({
  selector: 'testimonials-content',
  standalone: true,
  imports: [],
  template: `
  <p class="text-justify text-base indent-8 text-clip whitespace-pre-line">
  {{ content() }}
</p>
`
})
export class TestimonialsContentComponent {
  content = input<string>();
}
