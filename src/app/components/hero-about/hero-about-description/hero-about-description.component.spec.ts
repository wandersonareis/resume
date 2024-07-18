import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutDescriptionComponent } from './hero-about-description.component';

describe('HeroAboutDescriptionComponent', () => {
  let component: HeroAboutDescriptionComponent;
  let fixture: ComponentFixture<HeroAboutDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAboutDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAboutDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
