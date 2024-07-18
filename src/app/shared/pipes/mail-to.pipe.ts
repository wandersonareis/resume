import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mailTo',
  standalone: true
})
export class MailToPipe implements PipeTransform {
  transform(value: string,): string {
    return `mailto:${value}`;
  }

}
