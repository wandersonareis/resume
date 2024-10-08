import { Component, input } from '@angular/core';
import { IconComponent } from "../../../../projects/icon/src/lib/icon/icon.component";

@Component({
  selector: 'external-link-button',
  standalone: true,
  imports: [IconComponent],
  template: `
  <a type="button" [href]="link()" target="_blank">
   <span class="stroke-theme-600 hover:stroke-theme-800 dark:hover:stroke-theme-600-dark p-1 ">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0l-7 7"/></svg>
   </span>
</a>
`
})
export class ExternalLinkButtonComponent {
  link = input<string | undefined>();
}
