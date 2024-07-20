import { TestBed } from '@angular/core/testing';

import { HeroJobsService } from './hero-jobs.service';

describe('HeroJobsService', () => {
  let service: HeroJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
