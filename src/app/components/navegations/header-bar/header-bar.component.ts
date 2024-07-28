import { Component } from '@angular/core';
import { LinkButton } from '../../../shared/link-button/link-button.component';
import { RouterModule } from '@angular/router';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent, NavItem } from './header-menu/header-menu.component';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [
    RouterModule,
    HeaderLogoComponent,
    HeaderMenuComponent
  ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  headerData!: NavbarData
  constructor(private apiService: ApiService) {
    this.apiService.getLanguageData<NavbarData>('navbar').subscribe(
      (data: NavbarData) => {
        this.headerData = data
      })
  }
}

export interface NavbarData {
  label: string;
  personalLogo: string;
  defaultUrl: string;
  navLinks: NavItem[]
  downloadCv: LinkButton
}