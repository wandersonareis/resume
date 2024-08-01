import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRouteStub } from '../../shared/_spec-tools/activated-route-stub.class';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { mocked_profile } from '../../shared/_spec-tools/mock-api.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLanguageData']);
    activatedRouteStub = new ActivatedRouteStub();

    await TestBed.configureTestingModule({
      imports: [ProfilePageComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
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
