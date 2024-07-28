import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHeroProjectsComponent } from './resume-hero-projects.component';

describe('ResumeHeroProjectsComponent', () => {
  let component: ResumeHeroProjectsComponent;
  let fixture: ComponentFixture<ResumeHeroProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeHeroProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeHeroProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
