import { Component } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  siteLanguage = "Português";
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'br', label: 'Português' }
  ]

  constructor(private translateService: TranslocoService) { 
    
  }

  changeSiteLanguage(language: string) {
    this.translateService.setActiveLang(language);
    this.siteLanguage = this.languageList.find(l => l.code === language)?.label || 'English';
  }
}
