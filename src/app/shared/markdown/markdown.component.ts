import { Component, input } from '@angular/core';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'markdown',
  standalone: true,
  imports: [CommonModule, MarkdownPipe],
  template: ` <div [innerHTML]="html() | markdown | async"></div> `,
})
export class MarkdownComponent {
  html = input<string>('');
}

@Component({
  selector: 'markdown-list',
  standalone: true,
  imports: [MarkdownComponent],
  template: `
    @for (item of items(); track $index) {
      <markdown [html]="item"></markdown>
    }
  `,
})
export class MarkdownListComponent {
  items = input<string[]>();
}
