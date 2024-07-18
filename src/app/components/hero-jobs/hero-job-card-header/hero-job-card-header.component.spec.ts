import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobCardHeaderComponent } from './hero-job-card-header.component';

describe('HeroJobCardHeaderComponent', () => {
  let component: HeroJobCardHeaderComponent;
  let fixture: ComponentFixture<HeroJobCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
