import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSkillsComponent } from './hero-skills.component';
import { ComponentRef } from '@angular/core';
import { mocked_skills } from '../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';

describe('HeroSkillsComponent', () => {
  let component: HeroSkillsComponent;
  let fixture: ComponentFixture<HeroSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Skills section', () => {
  let component: HeroSkillsComponent;
  let componentRef: ComponentRef<HeroSkillsComponent>;
  let fixture: ComponentFixture<HeroSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSkillsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroSkillsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should render skills section title and description', async () => {
    componentRef.setInput('skillsData', mocked_skills);
    
    fixture.detectChanges();
    await fixture.whenStable()

    const skillsElement = fixture.debugElement.query(By.css('title-and-description')).nativeElement;

    expect(skillsElement).toBeTruthy();
 
    const badgeElement = skillsElement.querySelector('badge p');
    expect(badgeElement.textContent.trim()).toBe(mocked_skills.title);

    const descriptionElement = skillsElement.querySelector('div > p');
    expect(descriptionElement.textContent.trim()).toBe(mocked_skills.description);
  });

  it('should render skills list', async () => {
    componentRef.setInput('skillsData', mocked_skills);

    fixture.detectChanges();
    await fixture.whenStable();

    const skillsElement = fixture.debugElement.queryAll(By.css('hero-skill'));

    expect(skillsElement).toHaveSize(mocked_skills.skills.length);
  })
})