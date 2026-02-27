import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MarkdownComponent } from '../../../shared/markdown/markdown.component';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from '../../../shared/badge/badge.component';
import { ExternalLinkButtonComponent } from '../../../shared/external-link-button/external-link-button.component';

@Component({
  selector: 'hero-project-image',
  standalone: true,
  imports: [],
  template: `
    <figure
      class="inline-flex w-full h-full items-center p-12 bg-theme-100 dark:bg-theme-200-dark max-w-120"
    >
      <img [src]="url()" [alt]="alt()" class="object-cover rounded-lg" />
    </figure>
  `,
})
export class HeroProjectImageComponent {
  url = input<string | undefined>('assets/images/project-a.png');
  alt = input<string>('Project Image');
}

@Component({
  selector: 'hero-project-techs-list',
  standalone: true,
  imports: [RouterModule, BadgeComponent],
  template: `
    <div class="flex flex-wrap gap-2">
      @for (tech of technologies(); track $index) {
        <a type="button" [routerLink]="['/projects', tech]">
          <badge [label]="tech" />
        </a>
      }
    </div>
  `,
})
export class HeroProjectTechsListComponent {
  technologies = input<string[] | undefined>();
}

@Component({
  selector: 'hero-project-card',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownComponent,
    ExternalLinkButtonComponent,
    HeroProjectTechsListComponent,
    HeroProjectImageComponent,
  ],
  templateUrl: './hero-project-card.component.html',
})
export class HeroProjectCardComponent {
  project = input<Project>();
  isOdd = input<boolean>();
}

export interface Project {
  isImportant: boolean;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  linkIcon: string;
}
