import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAboutQuickFactsComponent } from './hero-about-quick-facts.component';
import { ComponentRef } from '@angular/core';
import { mocked_about_me } from '../../../shared/_spec-tools/mock-api.service';
import { By } from '@angular/platform-browser';

describe('HeroAboutQuickFactsComponent', () => {
  let component: HeroAboutQuickFactsComponent;
  let componentRef: ComponentRef<HeroAboutQuickFactsComponent>;
  let fixture: ComponentFixture<HeroAboutQuickFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroAboutQuickFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAboutQuickFactsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    componentRef.setInput('quickFacts', mocked_about_me.quickFacts);
    fixture.detectChanges();

    const pElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(pElement).toBeTruthy();
    expect(pElement.textContent).toContain(mocked_about_me.quickFacts.title);
  });

  it('should render quick facts', () => {
    componentRef.setInput('quickFacts', mocked_about_me.quickFacts);
    fixture.detectChanges();

    const ulElement = fixture.debugElement.query(By.css('ul')).nativeElement;
    expect(ulElement).toBeTruthy();

    const liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toEqual(mocked_about_me.quickFacts.facts.length);
    expect(liElements[0].nativeElement.textContent).toContain(mocked_about_me.quickFacts.facts[0]);
  });
});
