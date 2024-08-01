import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent, HeroLocationComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

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