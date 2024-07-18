import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLinkComponent } from './mail-link.component';

describe('MailLinkComponent', () => {
  let component: MailLinkComponent;
  let fixture: ComponentFixture<MailLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
