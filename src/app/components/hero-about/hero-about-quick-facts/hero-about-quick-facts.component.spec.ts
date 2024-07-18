import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutQuickFactsComponent } from './hero-about-quick-facts.component';

describe('HeroAboutQuickFactsComponent', () => {
  let component: HeroAboutQuickFactsComponent;
  let fixture: ComponentFixture<HeroAboutQuickFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAboutQuickFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAboutQuickFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
