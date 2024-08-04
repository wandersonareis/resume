import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import { ApiService } from '../../services/api.service';
import { mocked_profile, mocked_skills } from '../../shared/_spec-tools/mock-api.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { HeroSkillsComponent } from '../../components/hero-skills/hero-skills.component';
import { ComponentRef } from '@angular/core';

describe('ProfilePageComponent', () => {
  describe('ProfilePageComponent', () => {
    let component: ProfilePageComponent;
    let fixture: ComponentFixture<ProfilePageComponent>;
    let apiService: jasmine.SpyObj<ApiService>;

    beforeEach(async () => {
      const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLanguageData']);

      await TestBed.configureTestingModule({
        imports: [ProfilePageComponent],
        providers: [
          { provide: ApiService, useValue: apiServiceSpy },
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(ProfilePageComponent);
      component = fixture.componentInstance;
      apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
      apiService.getLanguageData.and.returnValue(of(mocked_profile));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render a profile page', (done: DoneFn) => {
      component.heroCardData$.next(mocked_profile);
      fixture.detectChanges();

      const projectElement = fixture.debugElement.query(By.css('app-hero'));
      const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;

      expect(projectElement).toBeTruthy();
      expect(titleElement.textContent).toEqual(mocked_profile.title);

      done();
    });

    it('should render a perfil image', (done: DoneFn) => {
      component.heroCardData$.next(mocked_profile);
      fixture.detectChanges();

      const imageElement = fixture.debugElement.query(By.css('img')).nativeElement;
      expect(imageElement).toBeTruthy();

      imageElement.onload = () => {
        expect(imageElement.naturalWidth).toBeGreaterThan(0);
        expect(imageElement.naturalHeight).toBeGreaterThan(0);
      }

      done();
    });

    it('should render a markdown list with descriptions', (done: DoneFn) => {
      component.heroCardData$.next(mocked_profile);
      fixture.detectChanges();

      const listElement = fixture.debugElement.query(By.css('markdown-list')).nativeElement;
      const markdownElements = listElement.querySelectorAll('markdown');

      expect(listElement).toBeTruthy();
      expect(markdownElements.length).toEqual(mocked_profile.descriptions.length);
      expect(markdownElements[0].attributes['ng-reflect-html'].value).toContain(mocked_profile.descriptions[0]);

      done();
    })
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
      expect(badgeElement).toBeTruthy();

      const descriptionElement = skillsElement.querySelector('div > p');
      expect(descriptionElement).toBeTruthy();
    });

    it('should render skills list', async () => {
      componentRef.setInput('skillsData', mocked_skills);

      fixture.detectChanges();
      await fixture.whenStable();

      const skillsElement = fixture.debugElement.queryAll(By.css('hero-skill'));

      expect(skillsElement).toHaveSize(mocked_skills.skills.length);
    })
  })
})
