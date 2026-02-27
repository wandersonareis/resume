import { Component, input } from '@angular/core';
import { TestimonialsContentComponent } from '../testimonials-content/testimonials-content.component';
import { TestimonialsFooterComponent } from '../testimonials-footer/testimonials-footer.component';
import { AvatarComponent } from '../../../shared/avatar/avatar.component';

@Component({
  selector: 'testimonials-cards',
  standalone: true,
  imports: [
    AvatarComponent,
    TestimonialsContentComponent,
    TestimonialsFooterComponent,
  ],
  templateUrl: './testimonials-cards.component.html',
})
export class TestimonialsCardsComponent {
  testimonials = input<Testimonial[]>();
}

export interface Testimonial {
  avatar: string;
  content: string;
  authorName: string;
  authorTitle: string;
}
