import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { LinkButton } from '../../../shared/link-button/link-button.component';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  headerData!: NavbarData
  constructor(private apiService: ApiService) {
    this.apiService.getHeaderData<NavbarData>().subscribe(data => {
      this.headerData = data
    })
  }

}

export type NavItem = {
  label: string
  routerLink: string;
};

export interface NavbarData {
  label: string;
  personalLogo: string;
  defaultUrl: string;
  navLinks: NavItem[]
  downloadCv: LinkButton
}