import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { ParamMap, convertToParamMap } from '@angular/router';
import { By } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service'
import { ProjectsPageFilteredComponent } from './projects-page-filtered.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mocked_projects } from '../../shared/_spec-tools/mock-api.service';
import { ActivatedRouteStub } from '../../shared/_spec-tools/activated-route-stub.class';

describe('ProjectsPageFilteredComponent', () => {
  let component: ProjectsPageFilteredComponent;
  let fixture: ComponentFixture<ProjectsPageFilteredComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLanguageData']);
    activatedRouteStub = new ActivatedRouteStub();

    await TestBed.configureTestingModule({
      imports: [ProjectsPageFilteredComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsPageFilteredComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    apiService.getLanguageData.and.returnValue(of(mocked_projects));
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count the number of app-hero-projects when tech is Angular', (done: DoneFn) => {
    activatedRouteStub.setParamMap({ tech: 'Angular' });

    fixture.detectChanges();

    component.projectData$.subscribe(() => {
      fixture.detectChanges();

      const projectElements = fixture.debugElement.queryAll(By.css('hero-project-card'));

      expect(projectElements.length).toBe(1);

      done();
    });
  });

  it('should count the number of app-hero-projects when tech is React', (done: DoneFn) => {
    activatedRouteStub.setParamMap({ tech: 'React' });

    fixture.detectChanges(); 

    component.projectData$.subscribe(() => {
      fixture.detectChanges();

      const projectElements = fixture.debugElement.queryAll(By.css('hero-project-card'));

      expect(projectElements.length).toBe(2);

      done();
    });
  });

  it('should all app-hero-projects when tech is null', (done: DoneFn) => {
    activatedRouteStub.setParamMap({ tech: null });

    fixture.detectChanges(); 

    component.projectData$.subscribe(() => {
      fixture.detectChanges();

      const projectElements = fixture.debugElement.queryAll(By.css('hero-project-card'));

      expect(projectElements.length).toBe(3);

      done();
    });
  });
});
