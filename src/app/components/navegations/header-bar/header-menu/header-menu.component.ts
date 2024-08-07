import { Component, input } from '@angular/core';
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
  templateUrl: './header-menu.component.html'
})
export class HeaderMenuComponent {
  navLinks = input<NavItem[]>([]);
  downloadCv = input<LinkButton>({ label: 'Download CV', url: 'javascript:void(0)' } as LinkButton);
}

export interface NavItem {
  label: string
  routerLink: string;
};