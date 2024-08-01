import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutComponent } from './hero-about.component';
import { ComponentRef } from '@angular/core';
import { mocked_about_me } from '../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';

describe('HeroAboutComponent', () => {
  let component: HeroAboutComponent;
  let componentRef: ComponentRef<HeroAboutComponent>;
  let fixture: ComponentFixture<HeroAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAboutComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeroAboutComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    fixture.detectChanges();
  });

  afterEach(() => {
    componentRef.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a badge component', () => {
    componentRef.setInput('aboutData', mocked_about_me);
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('badge')).nativeElement;
    expect(badgeElement).toBeTruthy();
    expect(badgeElement.innerText).toEqual(mocked_about_me.title);
  });

  it('should contain a h3 component', () => {
    componentRef.setInput('aboutData', mocked_about_me);
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleElement).toBeTruthy();
    expect(titleElement.innerText).toEqual(mocked_about_me.description.title);
  });

  it('should render about me image and alt text', () => {
    componentRef.setInput('aboutData', mocked_about_me);
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;

    imgElement.onload = () => {      
      expect(imgElement.src).toContain(mocked_about_me.image.url);
      expect(imgElement.alt).toEqual(mocked_about_me.image.alt);
      expect(imgElement.naturalWidth).toBeGreaterThan(0);
      expect(imgElement.naturalHeight).toBeGreaterThan(0);
    };
  });

  it("should render a markdown list with descriptions", () => {
    componentRef.setInput('aboutData', mocked_about_me);
    fixture.detectChanges();
  
    const listElement = fixture.debugElement.query(By.css('markdown-list')).nativeElement;
    const markdowns = fixture.debugElement.queryAll(By.css('markdown'));
    
    expect(listElement).toBeTruthy();
    expect(markdowns.length).toEqual(mocked_about_me.description.descriptions.length);
  })
});
