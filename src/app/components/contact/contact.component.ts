import { Component } from '@angular/core';
import { Contact, ContactRowComponent } from './contact-row/contact-row.component';
import { Social } from '../../shared/social-links/social-links.component';
import { SharedModule } from '../../shared/shared.module';
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
}

export interface ContactData {
  title: string;
  description: string;
  contacts: Contact[];
  social: Social;
}