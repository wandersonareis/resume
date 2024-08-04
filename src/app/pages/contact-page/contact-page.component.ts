import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { BehaviorSubject } from 'rxjs';
import { ContactData } from '../../components/contact/contact.component';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsModule
  ],
  template: `
  <app-contact [contactData]="contactData$ | async"></app-contact>
  `,
})
export class ContactPageComponent implements OnInit {
  contactData$ = new BehaviorSubject<ContactData>({} as ContactData)

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLanguageData<ContactData>('contact').subscribe(
      (data: ContactData) => {
        console.log("data", data);
        
        this.contactData$.next(data)
      })
  }
}
