import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProjectCardComponent } from './hero-project-card.component';

describe('HeroProjectCardComponent', () => {
  let component: HeroProjectCardComponent;
  let fixture: ComponentFixture<HeroProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProjectCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
