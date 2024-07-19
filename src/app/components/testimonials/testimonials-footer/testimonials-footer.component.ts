import { Component, Input } from '@angular/core';

@Component({
  selector: 'testimonials-footer',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-footer.component.html',
  styleUrl: './testimonials-footer.component.css'
})
export class TestimonialsFooterComponent {
  @Input() authorName!: string;
  @Input() authorOccupation!: string;
}
