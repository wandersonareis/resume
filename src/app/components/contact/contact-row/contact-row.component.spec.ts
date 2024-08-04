import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRowComponent } from './contact-row.component';
import { ComponentRef } from '@angular/core';

describe('ContactRowComponent', () => {
  let component: ContactRowComponent;
  let componentRef: ComponentRef<ContactRowComponent>;
  let fixture: ComponentFixture<ContactRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactRowComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
