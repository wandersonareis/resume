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
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  html = input<string>("");
}
