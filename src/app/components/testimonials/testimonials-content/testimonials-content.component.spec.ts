import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsContentComponent } from './testimonials-content.component';

describe('TestimonialsContentComponent', () => {
  let component: TestimonialsContentComponent;
  let fixture: ComponentFixture<TestimonialsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
