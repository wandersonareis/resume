import { Component, Input } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { IconModule } from '../../../../projects/icon/src/public-api';

@Component({
  selector: 'copy-button',
  standalone: true,
  imports: [
    IconModule,
    ClipboardModule
  ],
  templateUrl: './copy-button.component.html',
  styleUrl: './copy-button.component.css'
})
export class CopyButtonComponent {
  @Input() target: string = '';
  @Input() icon: string = 'ph:copy';
}
