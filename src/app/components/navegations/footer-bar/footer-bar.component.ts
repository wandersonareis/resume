import { Component } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {
  footerData!: FooterData;
  constructor(private translateService: TranslocoService) {
    this.translateService.selectTranslateObject<FooterData>('footer').subscribe(
      (data: FooterData) => {
      this.footerData = data
    })
  }
}
export interface FooterData {
  designLink: string;
  designBy: string;
  designYear: string;
  codeLink: string;
  codedBy: string;
  codeYear: string;
}