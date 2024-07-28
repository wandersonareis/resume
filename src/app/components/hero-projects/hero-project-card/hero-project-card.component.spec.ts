import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { provideLocationMocks } from '@angular/common/testing';

import { HeroProjectCardComponent, HeroProjectImageComponent, HeroProjectTechsListComponent } from './hero-project-card.component';
import { mocked_projects } from '../../../shared/_spec-tools/mock-api.service';
import { ComponentRef, Directive, HostListener, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { provideRouter, Router, RouterLinkWithHref } from '@angular/router';
import { HomeComponent } from '../../../pages/home/home.component';
import { ProjectsPageComponent } from '../../../pages/projects-page/projects-page.component';

@Directive({
  selector: '[routerLink]',
})
class RouterLinkSpy {
  @Input()
  routerLink = '';

  constructor(private router: Router) {}

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(this.routerLink);
  }
}

const leftMouseButton = 0;

describe('Testing HeroProjectCardComponent', () => {
  describe("HeroProjectCardComponent", () => {
    let component: HeroProjectCardComponent;
    let fixture: ComponentFixture<HeroProjectCardComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HeroProjectCardComponent]
      })
        .compileComponents();

      fixture = TestBed.createComponent(HeroProjectCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })

  describe("HeroImageComponent", () => {
    let component: HeroProjectImageComponent;
    let componentRef: ComponentRef<HeroProjectImageComponent>;
    let fixture: ComponentFixture<HeroProjectImageComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HeroProjectImageComponent]
      })
        .compileComponents();

      fixture = TestBed.createComponent(HeroProjectImageComponent);
      component = fixture.componentInstance;
      componentRef = fixture.componentRef;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it("should render a default image and default alt text", (done: DoneFn) => {
      const imgElement: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
      expect(imgElement.src).toContain('assets/images/project-a.png');
      expect(imgElement.alt).toEqual('Project Image');

      imgElement.onload = () => {
        expect(imgElement.naturalWidth).toBeGreaterThan(900);
        expect(imgElement.naturalHeight).toBeGreaterThan(760);
        done();
      };
    })

    it("has a figure element with an img element and the correct src and alt", () => {
      const mockedUrl = mocked_projects.projectsList[0].imageUrl;
      const mockedAlt = mocked_projects.projectsList[0].title;

      componentRef.setInput('url', mockedUrl);
      componentRef.setInput('alt', mockedAlt);
      fixture.detectChanges();

      const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;

      expect(fixture.nativeElement.querySelector('figure')).toBeTruthy();

      imgElement.onload = () => {
        expect(imgElement.naturalWidth).toBeGreaterThan(0);
        expect(imgElement.naturalHeight).toBeGreaterThan(0);
      }
      expect(imgElement).toBeTruthy();
      expect(imgElement.src).toContain(mockedUrl);
      expect(imgElement.alt).toEqual(mockedAlt);
    })
  })

  describe("HeroProjectTechsListComponent", () => {
    let component: HeroProjectTechsListComponent;
    let componentRef: ComponentRef<HeroProjectTechsListComponent>;
    let fixture: ComponentFixture<HeroProjectTechsListComponent>;
    let router: Router;
    let routerSpy: jasmine.SpyObj<Router>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HeroProjectTechsListComponent],
        providers: [
          provideRouter([
            {
              path: '',
              pathMatch: 'full',
              component: HomeComponent
            },
            {
              path: 'projects',
              component: ProjectsPageComponent
            }
          ]),
          provideLocationMocks(),
        ]
      })
        .compileComponents();

      fixture = TestBed.createComponent(HeroProjectTechsListComponent);
      component = fixture.componentInstance;
      componentRef = fixture.componentRef;
      routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      router = TestBed.inject(Router);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it("should render a list of technologies", () => {
      const mockedTechnologies = mocked_projects.projectsList[0].technologies;
      componentRef.setInput('technologies', mockedTechnologies);
      fixture.detectChanges();

      const links = fixture.debugElement.queryAll(By.css('a'));
      expect(links.length).toBe(mockedTechnologies.length);
      expect(fixture.nativeElement.querySelector('div')).toBeTruthy();
    })

    it('should be render a badge for each technology', () => {
      const mockedTechnologies = mocked_projects.projectsList[0].technologies;
      componentRef.setInput('technologies', mockedTechnologies);
      fixture.detectChanges();

      const badges = fixture.debugElement.queryAll(By.css('badge'));

      expect(badges.length).toBe(mockedTechnologies.length);
    })

    it('not render when there are no technologies', () => {
      componentRef.setInput('technologies', []);
      fixture.detectChanges();

      const links = fixture.debugElement.queryAll(By.css('a'));
      expect(links.length).toBe(0);
    })
  })
});
