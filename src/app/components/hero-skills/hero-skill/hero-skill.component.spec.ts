import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSkillComponent } from './hero-skill.component';

describe('HeroSkillComponent', () => {
  let component: HeroSkillComponent;
  let fixture: ComponentFixture<HeroSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
