import { Component } from '@angular/core';
import { Contact, ContactRowComponent } from './contact-row/contact-row.component';
import { Social } from '../../shared/social-links/social-links.component';
import { SharedModule } from '../../shared/shared.module';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SharedModule,
    ContactRowComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData!: ContactData
  constructor(private apiService: ApiService) {
    this.apiService.getData<ContactData>('contact').subscribe(
      (data: ContactData) => {
        this.contactData = data
      })
  }
}

export interface ContactData {
  title: string;
  description: string;
  contacts: Contact[];
  social: Social;
}