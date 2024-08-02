import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroSkillComponent, Skill } from './hero-skill.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentRef } from '@angular/core';

describe('HeroSkillComponent', () => {
  let component: HeroSkillComponent;
  let componentRef: ComponentRef<HeroSkillComponent>;
  let fixture: ComponentFixture<HeroSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, HeroSkillComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSkillComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
  });

  it('should render "No skills" when no skill is provided', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const noSkillsElement = fixture.debugElement.query(By.css('p'));
    
    expect(noSkillsElement).toBeTruthy();
    expect(noSkillsElement.nativeElement.textContent.trim()).toBe('No skills');
  });

  it('should render the skill icon and name when a skill is provided', async () => {
    const skill: Skill = { name: 'Coding', icon: 'code', iconSize: 50 };
    componentRef.setInput('skill', skill);
    fixture.detectChanges();
    await fixture.whenStable();

    const iconElement = fixture.debugElement.query(By.css('icon'));
    const nameElement = fixture.debugElement.query(By.css('span'));

    expect(iconElement).toBeTruthy();
    expect(iconElement.attributes['ng-reflect-name']).toBe(skill.icon);

    expect(nameElement).toBeTruthy();
    expect(nameElement.nativeElement.textContent.trim()).toBe(skill.name);
  });

  it('should set default icon size when skill does not provide icon size', async () => {
    const skill: Skill = { name: 'Coding', icon: 'code' };
    componentRef.setInput('skill', skill);
    fixture.detectChanges();
    await fixture.whenStable();

    const iconElement = fixture.debugElement.query(By.css('icon'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.attributes['ng-reflect-size']).toBe('75');
  });
});
