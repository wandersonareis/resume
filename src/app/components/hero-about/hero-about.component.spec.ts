import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutComponent } from './hero-about.component';
import { ComponentRef, DebugElement } from '@angular/core';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('aboutData should be set', () => {
    componentRef.setInput('aboutData', mocked_about_me);
    fixture.detectChanges();

    const badgeElement = fixture.debugElement.query(By.css('badge')).nativeElement;
    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    const figureElement = fixture.debugElement.query(By.css('figure')).nativeElement;
    
    expect(badgeElement.innerText).toEqual(mocked_about_me.title);
    expect(titleElement.innerText).toEqual(mocked_about_me.description.title);
    expect(imgElement.src).toContain(mocked_about_me.picture);
  });
});
