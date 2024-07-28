import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsPageComponent } from './projects-page.component';
import { ApiService } from '../../services/api.service';
import { mocked_projects } from '../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ActivatedRouteStub } from '../../shared/_spec-tools/activated-route-stub.class';
import { of } from 'rxjs';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let activatedRouteStub: ActivatedRouteStub;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLanguageData']);
    activatedRouteStub = new ActivatedRouteStub();

    await TestBed.configureTestingModule({
      imports: [ProjectsPageComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsPageComponent);
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

  it('should count the number of app-hero-projects', (done: DoneFn) => {
    activatedRouteStub.setUrl([new UrlSegment('projects', {})]);

    fixture.detectChanges();

    component.projectData$.subscribe(() => {
      fixture.detectChanges();

      const projectElements = fixture.debugElement.queryAll(By.css('hero-project-card'));

      expect(projectElements.length).toBe(3);

      done();
    });
  });
});