import { Component, input } from '@angular/core';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'markdown',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownPipe
  ],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.css'
})
export class MarkdownComponent {
  html = input<string>("");
}
