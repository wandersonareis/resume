import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobCardComponent } from './hero-job-card.component';

describe('HeroJobCardComponent', () => {
  let component: HeroJobCardComponent;
  let fixture: ComponentFixture<HeroJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
