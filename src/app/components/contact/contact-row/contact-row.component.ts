import { Component, input, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'contact-row',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './contact-row.component.html'
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