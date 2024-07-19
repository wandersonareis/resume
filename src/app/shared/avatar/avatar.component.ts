import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() url!: string;
  @Input() alt!: string;
}
