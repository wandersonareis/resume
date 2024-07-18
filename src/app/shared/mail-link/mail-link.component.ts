import { Component, Input } from '@angular/core';
import { MailToPipe } from '../pipes/mail-to.pipe';

@Component({
  selector: 'mail-link',
  standalone: true,
  imports: [
    MailToPipe
  ],
  templateUrl: './mail-link.component.html',
  styleUrl: './mail-link.component.css'
})
export class MailLinkComponent {
  @Input() mail: string = '';
}
