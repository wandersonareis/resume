import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProjectsComponent } from './hero-projects.component';

describe('HeroProjectsComponent', () => {
  let component: HeroProjectsComponent;
  let fixture: ComponentFixture<HeroProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
