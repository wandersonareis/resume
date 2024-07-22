import { Component, Input } from '@angular/core';
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
  @Input() logo!: string;
  @Input() label: string = '';
  @Input() routerLink: string = '/';
}
