import { Component, Input } from '@angular/core';
import { IconComponent } from "../../../../projects/icon/src/lib/icon/icon.component";

@Component({
  selector: 'external-link-button',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './external-link-button.component.html',
  styleUrl: './external-link-button.component.css'
})
export class ExternalLinkButtonComponent {
  @Input() link!: string
}
