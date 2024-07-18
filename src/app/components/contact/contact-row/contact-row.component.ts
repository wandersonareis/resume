import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'contact-row',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './contact-row.component.html',
  styleUrl: './contact-row.component.css'
})
export class ContactRowComponent {
  @Input() contact!: Contact;
}

export interface Contact {
  isMail?: string;
  text: string;
  icon: string;
  url?: string;
  copyIcon?: string;
}