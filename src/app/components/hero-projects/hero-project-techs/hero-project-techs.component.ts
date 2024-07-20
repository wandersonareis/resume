import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hero-project-techs',
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ],
  templateUrl: './hero-project-techs.component.html',
  styleUrl: './hero-project-techs.component.css'
})
export class HeroProjectTechsComponent {
  @Input() technologies: string[] = [];
}
