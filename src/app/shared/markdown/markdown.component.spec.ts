import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownComponent, MarkdownListComponent } from './markdown.component';
import { ComponentRef, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MarkdownComponent', () => {
  let component: MarkdownComponent;
  let fixture: ComponentFixture<MarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('MarkdownListComponent', () => {
  let component: MarkdownListComponent;
  let componentRef: ComponentRef<MarkdownListComponent>;
  let fixture: ComponentFixture<MarkdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarkdownListComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should contain a markdown component", (done: DoneFn) => {
    componentRef.setInput('items', ['test1', 'test2']);
    fixture.detectChanges();

    const markdownElements: DebugElement[] = fixture.debugElement.queryAll(By.css('markdown'));
    expect(markdownElements[0]).toBeTruthy();
    expect(markdownElements.length).toBe(2);
    expect(markdownElements[0].attributes['ng-reflect-html']).toBe('test1');  
    done();
  });
}
)
