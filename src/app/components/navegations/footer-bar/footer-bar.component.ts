import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [],
  templateUrl: './footer-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterBarComponent implements OnInit {
  apiService = inject(ApiService)

  footerData = signal<FooterData>({} as FooterData);

  ngOnInit(): void {
    this.apiService.getLanguageData<FooterData>('footer').subscribe(this.footerData.set)

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