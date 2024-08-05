import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobsComponent } from './hero-jobs.component';
import { ComponentRef } from '@angular/core';
import { mocked_jobs } from '../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';

describe('HeroJobsComponent', () => {
  let component: HeroJobsComponent;
  let componentRef: ComponentRef<HeroJobsComponent>;
  let fixture: ComponentFixture<HeroJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass jobsData to child components correctly', () => {
    componentRef.setInput('jobsData', mocked_jobs);
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('title-and-description div badge p')).nativeElement;
    const descriptionElement = fixture.debugElement.query(By.css('title-and-description div > p')).nativeElement;
    expect(titleElement.textContent.trim()).toBe(mocked_jobs.title);
    expect(descriptionElement.textContent.trim()).toBe(mocked_jobs.description);

    const jobCards = fixture.debugElement.queryAll(By.css('hero-job-card'));

    jobCards.forEach((jobCard, index) => {
      const job = mocked_jobs.jobs[index];

      const header = jobCard.query(By.css('article hero-job-card-header')).nativeElement;
      const jobTitle = header.querySelector('div > h3')      
      expect(jobTitle.textContent).toEqual(job.title);
      
      
      const descriptions = jobCard.query(By.css('article hero-job-card-descriptions-list')).nativeElement;
      const descriptionsList = descriptions.querySelectorAll('ul > li');
      expect(descriptionsList.length).toEqual(job.descriptions.length);
      descriptionsList.forEach((description: any, index: any) => {
        expect(description.textContent).toEqual(job.descriptions[index]);
      })
    });
    
  });
});
