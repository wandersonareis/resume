import { TestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mocked_projects } from '../../../shared/_spec-tools/mock-api.service';


describe('ProjectsServiceService', () => {
  let service: ProjectsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectsService]
    });
    service = TestBed.inject(ProjectsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter projects by tech', async () => {
    const mockData = mocked_projects;
    const expectedTitle = 'Projects Test';
    const expectedFirstProjectTitle = "Project B";
    const expectedProjectsLength = 1;
    const tech = 'Angular';
    const expectedFilteredProjectsLength = 1;

    service.getProjectsByFilterData(tech).subscribe(data => {

      expect(data.title).toEqual(expectedTitle);
      expect(data.projectsList[0].title).toEqual(expectedFirstProjectTitle);
      expect(data.projectsList[0]).toEqual(mockData.projectsList[1]);
      expect(data.projectsList).toHaveSize(expectedProjectsLength);
    });

    const req = httpMock.expectOne(`${import.meta.env['NG_APP_API_URL']}/projects`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should filter projects passing no tech', async () => {
    const tech = null;
    const mockData = mocked_projects;
    const expectedTitle = 'Projects Test';
    const expectedFirstProjectTitle = "Project A";
    const expectedLastProjectTitle = "Project C";
    const expectedFilteredProjectsLength = 3;

    service.getProjectsByFilterData(tech).subscribe(data => {
      expect(data.title).toEqual(expectedTitle);
      expect(data.projectsList).toEqual(mockData.projectsList);
      expect(data.projectsList).toHaveSize(expectedFilteredProjectsLength);
      expect(data.projectsList[0].title).toEqual(expectedFirstProjectTitle);
      expect(data.projectsList[2].title).toEqual(expectedLastProjectTitle);
    });

    const req = httpMock.expectOne(`${import.meta.env['NG_APP_API_URL']}/projects`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
