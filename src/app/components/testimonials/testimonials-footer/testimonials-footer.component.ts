import { Component, input } from '@angular/core';

@Component({
  selector: 'testimonials-footer',
  standalone: true,
  imports: [],
  template: `
  <div class="flex flex-col items-center">
  <span class="text-lg md:text-xl font-semibold">
    {{ authorName() }}
  </span>
  <span class="text-sm">{{ authorOccupation() }}</span>
</div>`
})
export class TestimonialsFooterComponent {
  authorName = input<string>();
  authorOccupation = input<string>();
}
