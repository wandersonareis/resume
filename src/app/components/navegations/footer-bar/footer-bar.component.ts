import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  imports: [],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {
  footerData!: FooterData;
  constructor(private apiService: ApiService) {
    this.apiService.getFooterData<FooterData>().subscribe(data => {
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