import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobsComponent } from './hero-jobs.component';

describe('HeroJobsComponent', () => {
  let component: HeroJobsComponent;
  let fixture: ComponentFixture<HeroJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
