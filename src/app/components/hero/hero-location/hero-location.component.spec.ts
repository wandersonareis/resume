import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLocationComponent } from './hero-location.component';

describe('HeroLocationComponent', () => {
  let component: HeroLocationComponent;
  let fixture: ComponentFixture<HeroLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
