import { Component, input } from '@angular/core';
import { MailLinkComponent } from '../../../shared/mail-link/mail-link.component';
import { CopyButtonComponent } from '../../../shared/copy-button/copy-button.component';

@Component({
  selector: 'contact-row',
  standalone: true,
  imports: [MailLinkComponent, CopyButtonComponent],
  templateUrl: './contact-row.component.html',
})
export class ContactRowComponent {
  contact = input<Contact>();
}

export interface Contact {
  isMail?: boolean;
  text: string;
  icon: string;
  url?: string;
  copyIcon?: string;
}
