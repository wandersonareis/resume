import { Component, Input } from '@angular/core';
import { IconModule } from '../../../../projects/icon/src/public-api';

@Component({
  selector: 'link-button',
  standalone: true,
  imports: [
    IconModule
  ],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.css'
})
export class LinkButtonComponent {
  @Input() downloadCv!: LinkButton
}

export interface LinkButton {
  label: string;
  url: string,
  icon: string
}
