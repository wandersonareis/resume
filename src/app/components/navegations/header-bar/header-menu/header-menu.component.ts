import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  LinkButton,
  LinkButtonComponent,
} from '../../../../shared/link-button/link-button.component';
import { ThemeToggleComponent } from '../../../../shared/theme-toggle/theme-toggle.component';

@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [RouterModule, LinkButtonComponent, ThemeToggleComponent],
  templateUrl: './header-menu.component.html',
})
export class HeaderMenuComponent {
  navLinks = input<NavItem[]>([]);
  downloadCv = input<LinkButton>({
    label: 'Download CV',
    url: '#',
  } as LinkButton);
}

export interface NavItem {
  label: string;
  routerLink: string;
}
