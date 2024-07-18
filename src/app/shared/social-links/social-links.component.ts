import { Component, Input } from '@angular/core';
import { IconModule } from '../../../../projects/icon/src/public-api';

export interface SocialLink {
  text: string;
  url: string;
  icon: string;
}

export interface Social {
  text?: string;
  links: SocialLink[];
}

@Component({
  selector: 'social-links',
  standalone: true,
  imports: [
    IconModule
  ],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css'
})
export class SocialLinksComponent {
  @Input() links!: SocialLink[];
}
