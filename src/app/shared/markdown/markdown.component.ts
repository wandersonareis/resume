import { Component, input } from '@angular/core';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../../../projects/icon/src/lib/safe-html.pipe';

@Component({
  selector: 'markdown',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownPipe,
    SafeHtmlPipe
  ],
  template: `
  <div [innerHTML]="html() | markdown | async | safeHtml">
</div>
`
})
export class MarkdownComponent {
  html = input<string>("");
}

@Component({
  selector: 'markdown-list',
  standalone: true,
  imports: [
    MarkdownComponent
  ],
  template: `
  @for (item of items(); track $index) {
  <markdown [html]="item"></markdown>
  }
`
})
export class MarkdownListComponent {
  items = input<string[]>();
}