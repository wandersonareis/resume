import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';
import { ApiService } from '../../services/api.service';
import { mocked_contact } from '../../shared/_spec-tools/mock-api.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getLanguageData']);

    await TestBed.configureTestingModule({
      imports: [ContactPageComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    apiService.getLanguageData.and.returnValue(of(mocked_contact));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a contact page', (done: DoneFn) => {
    component.contactData$.next(mocked_contact);
    fixture.detectChanges();
  
    const projectElement = fixture.debugElement.query(By.css('app-contact'));
    const titleElement = fixture.debugElement.query(By.css('title-and-description')).nativeElement;
  
    expect(projectElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
  
    done();
  });
});
