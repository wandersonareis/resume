import { Component, input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TestimonialsContentComponent } from '../testimonials-content/testimonials-content.component';
import { TestimonialsFooterComponent } from '../testimonials-footer/testimonials-footer.component';

@Component({
  selector: 'testimonials-cards',
  standalone: true,
  imports: [
    SharedModule,
    TestimonialsContentComponent,
    TestimonialsFooterComponent
  ],
  templateUrl: './testimonials-cards.component.html'
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