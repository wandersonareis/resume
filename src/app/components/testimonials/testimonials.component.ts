import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  Testimonial,
  TestimonialsCardsComponent,
} from './testimonials-cards/testimonials-cards.component';
import { ApiService } from '../../services/api.service';
import { TitleAndDescriptionComponent } from '../../shared/title-and-description/title-and-description.component';

export interface TestimonialsData {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TitleAndDescriptionComponent, TestimonialsCardsComponent],
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit {
  apiService = inject(ApiService);
  testimonialsData = signal<TestimonialsData>({} as TestimonialsData);

  ngOnInit(): void {
    this.apiService
      .getLanguageData<TestimonialsData>('testimonials')
      .subscribe(this.testimonialsData.set);
  }
}
