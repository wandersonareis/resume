import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true
})
export class MarkdownPipe implements PipeTransform {

  async transform(value: string): Promise<string> {
    const strimmedValue: string = value.trim();
    if (!strimmedValue) {
      return '';
    }

    marked.use({ breaks: true });
    const parsedValue: string = await marked.parse(strimmedValue);
    return parsedValue.trim();
  }

}
