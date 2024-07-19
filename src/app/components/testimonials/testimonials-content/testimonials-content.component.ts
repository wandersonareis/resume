import { Component, Input } from '@angular/core';

@Component({
  selector: 'testimonials-content',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-content.component.html',
  styleUrl: './testimonials-content.component.css'
})
export class TestimonialsContentComponent {
  @Input() content!: string
}
