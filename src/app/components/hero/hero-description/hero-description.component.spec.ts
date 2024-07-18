import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDescriptionComponent } from './hero-description.component';

describe('HeroDescriptionComponent', () => {
  let component: HeroDescriptionComponent;
  let fixture: ComponentFixture<HeroDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
