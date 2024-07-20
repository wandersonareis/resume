import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header-logo',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.css'
})
export class HeaderLogoComponent {
  @Input() logo!: string;
  @Input() label: string = '';
  @Input() routerLink: string = '/';
}
