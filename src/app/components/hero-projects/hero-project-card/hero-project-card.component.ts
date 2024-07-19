import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'hero-project-card',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './hero-project-card.component.html',
  styleUrl: './hero-project-card.component.css'
})
export class HeroProjectCardComponent {
  @Input() project!: Project
  @Input() isOdd: boolean = false;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  linkIcon: string;
}