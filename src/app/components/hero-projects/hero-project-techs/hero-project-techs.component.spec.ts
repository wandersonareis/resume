import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProjectTechsComponent } from './hero-project-techs.component';

describe('HeroProjectTechsComponent', () => {
  let component: HeroProjectTechsComponent;
  let fixture: ComponentFixture<HeroProjectTechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProjectTechsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProjectTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
