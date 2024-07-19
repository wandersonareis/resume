import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsFooterComponent } from './testimonials-footer.component';

describe('TestimonialsFooterComponent', () => {
  let component: TestimonialsFooterComponent;
  let fixture: ComponentFixture<TestimonialsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
