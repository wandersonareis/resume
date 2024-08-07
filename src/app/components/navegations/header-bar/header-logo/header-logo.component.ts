import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'header-logo',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.css'
})
export class HeaderLogoComponent {
  logo = input<string>('');
  label = input<string>('');
  routerLink = input<string>('/');
}
