import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LinkButton } from '../../../../shared/link-button/link-button.component';

@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  @Input() navLinks!: NavItem[];
  @Input() downloadCv!: LinkButton
}

export interface NavItem {
  label: string
  routerLink: string;
};