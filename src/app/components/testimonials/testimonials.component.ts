import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Testimonial, TestimonialsCardsComponent } from './testimonials-cards/testimonials-cards.component';
import { ApiService } from '../../services/api.service';


export interface TestimonialsData {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    SharedModule,
    TestimonialsCardsComponent,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonialsData!: TestimonialsData;
  constructor(private apiService: ApiService) {
    this.apiService.getLanguageData<TestimonialsData>('testimonials').subscribe((data: TestimonialsData) => {
      this.testimonialsData = data;
    });
  }
}
