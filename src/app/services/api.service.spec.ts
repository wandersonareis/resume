/* import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { projects } from '../shared/_spec-tools/mock-api.service';
import { HttpClient } from '@angular/common/http';
import { HeroProjectsData } from '../components/hero-projects/hero-projects.component';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
  });

  service = TestBed.inject(ApiService);

  it("should be created", async () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
}); */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { projects } from '../shared/_spec-tools/mock-api.service';
import { HeroProjectsData } from '../components/hero-projects/hero-projects.component';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a GET request', async () => {
    const mockData = projects;
    const expectedTitle = 'Projects Test';
    const expectedFirstProjectTitle = "Project A";
    const expectedProjectsLength = 3;

    service.getHeroProjectsData<HeroProjectsData>().subscribe(data => {
      console.log(data.projectsList.length);

      expect(data).toEqual(mockData);
      expect(data.title).toEqual(expectedTitle);
      expect(data.projectsList).toEqual(mockData.projectsList);
      expect(data.projectsList).toHaveSize(expectedProjectsLength);
      expect(data.projectsList[0].title).toEqual(expectedFirstProjectTitle);
    });

    const req = httpMock.expectOne('https://api.npoint.io/90a4e87f89c17143fd2a/projects');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should filter projects by tech', async () => {
    const mockData = projects;
    const expectedTitle = 'Projects Test';
    const expectedFirstProjectTitle = "Project B";
    const expectedProjectsLength = 1;
    const tech = 'Angular';
    const expectedFilteredProjectsLength = 1;

    service.getHeroProjectsByFilterData(tech).subscribe(data => {

      expect(data.title).toEqual(expectedTitle);
      expect(data.projectsList[0].title).toEqual(expectedFirstProjectTitle);
      expect(data.projectsList[0]).toEqual(mockData.projectsList[1]);
      expect(data.projectsList).toHaveSize(expectedProjectsLength);
    });

    const req = httpMock.expectOne('https://api.npoint.io/90a4e87f89c17143fd2a/projects');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should filter projects passing no tech', async () => {
    const tech = null;
    const mockData = projects;
    const expectedTitle = 'Projects Test';
    const expectedFirstProjectTitle = "Project A";
    const expectedLastProjectTitle = "Project C";
    const expectedFilteredProjectsLength = 3;

    service.getHeroProjectsByFilterData(tech).subscribe(data => {
      expect(data.title).toEqual(expectedTitle);
      expect(data.projectsList).toEqual(mockData.projectsList);
      expect(data.projectsList).toHaveSize(expectedFilteredProjectsLength);
      expect(data.projectsList[0].title).toEqual(expectedFirstProjectTitle);
      expect(data.projectsList[2].title).toEqual(expectedLastProjectTitle);
    });

    const req = httpMock.expectOne('https://api.npoint.io/90a4e87f89c17143fd2a/projects');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
