import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
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
  styleUrl: './header-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBarComponent implements OnInit {
  apiService = inject(ApiService)
  
  headerData = signal<NavbarData>({} as NavbarData)  

  ngOnInit(): void { 
    this.apiService.getLanguageData<NavbarData>('navbar').subscribe(this.headerData.set)
  }
}

export interface NavbarData {
  label: string;
  personalLogo: string;
  defaultUrl: string;
  navLinks: NavItem[]
  downloadCv: LinkButton
}