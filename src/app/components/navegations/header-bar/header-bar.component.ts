import { Component } from '@angular/core';
import { LinkButton } from '../../../shared/link-button/link-button.component';
import { RouterModule } from '@angular/router';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderMenuComponent, NavItem } from './header-menu/header-menu.component';
import { HeaderService } from './services/header.service';

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
  constructor(private headerService: HeaderService) {
    this.headerService.getHeaderData<NavbarData>().subscribe(data => {
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