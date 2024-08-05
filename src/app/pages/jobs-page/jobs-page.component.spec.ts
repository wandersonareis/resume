import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JobsPageComponent } from './jobs-page.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';
import { mocked_jobs } from '../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';

describe('JobsPageComponent', () => {
  let component: JobsPageComponent;
  let apiService: jasmine.SpyObj<ApiService>;
  let fixture: ComponentFixture<JobsPageComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLanguageData']);

    await TestBed.configureTestingModule({
      imports: [JobsPageComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(JobsPageComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    apiService.getLanguageData.and.returnValue(of(mocked_jobs));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass jobsData$ to app-hero-jobs component', waitForAsync(() => {
    component.jobsData$.next(mocked_jobs);
    fixture.detectChanges();
  
    const heroJobsElement = fixture.debugElement.query(By.css('app-hero-jobs')).nativeElement;
    expect(heroJobsElement).toBeTruthy();
    expect(component.jobsData$.getValue()).toEqual(mocked_jobs);
  }));
});
