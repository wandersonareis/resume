import { Component, input } from '@angular/core';

@Component({
  selector: 'link-button',
  standalone: true,
  template: `
    <a
      type="button"
      [href]="downloadCv()?.url || '#'"
      class="flex w-full text-center md:w-fit justify-center items-center gap-2 text-theme-300 hover:text-theme-50 dark:text-theme-300-dark dark:hover:text-theme-900-dark hover:bg-theme-700 font-medium rounded-lg text-sm px-4 py-2 bg-theme-900 dark:bg-theme-50 dark:hover:bg-gray-200-dark focus:ring-4 focus:outline-none focus:ring-theme-300 dark:focus:ring-theme-800-dark md:hover:scale-x-110"
    >
      <span class="text-theme-300 dark:text-theme-300-dark text-nowrap">{{
        downloadCv()?.label || 'Download CV'
      }}</span>
    </a>
  `,
})
export class LinkButtonComponent {
  downloadCv = input<LinkButton | undefined>({
    label: 'Download CV',
    url: '#',
  } as LinkButton);
}

export interface LinkButton {
  label: string;
  url: string;
}
