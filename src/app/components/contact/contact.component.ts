import { Component, input } from '@angular/core';
import {
  Contact,
  ContactRowComponent,
} from './contact-row/contact-row.component';
import { Social } from '../../shared/social-links/social-links.component';
import { TitleAndDescriptionComponent } from '../../shared/title-and-description/title-and-description.component';
import { SocialLinksComponent } from '../../shared/social-links/social-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TitleAndDescriptionComponent,
    SocialLinksComponent,
    ContactRowComponent,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactData = input<ContactData | null>();
}

export interface ContactData {
  title: string;
  description: string;
  contacts: Contact[];
  social: Social;
}
