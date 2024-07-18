import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutPictureComponent } from './hero-about-picture.component';

describe('HeroAboutPictureComponent', () => {
  let component: HeroAboutPictureComponent;
  let fixture: ComponentFixture<HeroAboutPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAboutPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAboutPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
