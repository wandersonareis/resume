import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'title-and-description',
  standalone: true,
  imports: [
    BadgeComponent
  ],
  templateUrl: './title-and-description.component.html',
  styleUrl: './title-and-description.component.css'
})
export class TitleAndDescriptionComponent {
  @Input() title: string = 'Empty';
  @Input() description: string = 'Description';
}
