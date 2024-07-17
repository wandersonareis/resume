import { Component } from '@angular/core';
import { IconModule } from '../../../../projects/icon/src/public-api';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [
    IconModule
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) { }
  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}
