import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProjectImageComponent } from './hero-project-image.component';

describe('HeroProjectImageComponent', () => {
  let component: HeroProjectImageComponent;
  let fixture: ComponentFixture<HeroProjectImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProjectImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProjectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
