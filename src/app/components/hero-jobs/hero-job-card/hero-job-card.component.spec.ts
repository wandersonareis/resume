import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobCardComponent, HeroJobCardDescriptionsListComponent, HeroJobCardHeaderComponent } from './hero-job-card.component';
import { ComponentRef } from '@angular/core';
import { mocked_jobs } from '../../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';

describe('HeroJobCardComponent', () => {
  let component: HeroJobCardComponent;
  let componentRef: ComponentRef<HeroJobCardComponent>;
  let fixture: ComponentFixture<HeroJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass job data to child components', () => {
    const mockJob = mocked_jobs.jobs[1];

    componentRef.setInput('job', mockJob);
    fixture.detectChanges();

    const headerComponent = fixture.debugElement.query(By.directive(HeroJobCardHeaderComponent)).componentInstance;
    const descriptionsListComponent = fixture.debugElement.query(By.directive(HeroJobCardDescriptionsListComponent)).componentInstance;

    expect(headerComponent.job()).toEqual(mockJob);
    expect(descriptionsListComponent.job()).toEqual(mockJob);
  });
});

describe('HeroJobCardHeaderComponent', () => {
  let component: HeroJobCardHeaderComponent;
  let componentRef: ComponentRef<HeroJobCardHeaderComponent>;
  let fixture: ComponentFixture<HeroJobCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobCardHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobCardHeaderComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display job details correctly', () => {
    const mockJob = mocked_jobs.jobs[0];
    componentRef.setInput('job', mockJob);
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const timeElement = fixture.debugElement.query(By.css('time')).nativeElement;

    expect(imgElement.src).toContain(mockJob.companyLogo);
    expect(imgElement.alt).toBe(`${mockJob.company} logo`);
    expect(titleElement.textContent).toBe(mockJob.title);
    expect(timeElement.textContent).toBe(mockJob.duration);
  });
});

describe('HeroJobCardDescriptionsListComponent', () => {
  let component: HeroJobCardDescriptionsListComponent;
  let componentRef: ComponentRef<HeroJobCardDescriptionsListComponent>;
  let fixture: ComponentFixture<HeroJobCardDescriptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobCardDescriptionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobCardDescriptionsListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display job descriptions correctly', () => {
    const mockJob = mocked_jobs.jobs[2];
    
    componentRef.setInput('job', mockJob);
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('li'));

    expect(listItems).toHaveSize(mockJob.descriptions.length);
    listItems.forEach((item, index) => {
      expect(item.nativeElement.textContent).toBe(mockJob.descriptions[index]);
    });
  });
});