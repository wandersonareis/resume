import { Component, input } from '@angular/core';

@Component({
  selector: 'hero-job-card-header',
  standalone: true,
  imports: [],
  template: `
  <div
  class="flex flex-col gap-4 md:flex-row md:items-center justify-between text-lg"
>
  <figure>
    <img
      [src]="job()?.companyLogo"
      [alt]="job()?.company + ' logo'"
      loading="lazy"
      width="85px"
      height="85px"
    />
  </figure>
  <h3 class="text-lg order-2 md:order-1">{{ job()?.title }}</h3>
  <time class="text-base order-1 md:order-2">{{ job()?.duration }}</time>
</div>
`,
})
export class HeroJobCardHeaderComponent {
  job = input<HeroJob>();
}

@Component({
  selector: 'hero-job-card-descriptions-list',
  standalone: true,
  imports: [],
  template: `
  <ul class="self-center ps-5 gap-1">
  @for (description of job()?.descriptions; track $index) {
  <li class="list-disc text-base">{{ description }}</li>
  }
</ul>
`
})
export class HeroJobCardDescriptionsListComponent {
  job = input<HeroJob>();
}

@Component({
  selector: 'hero-job-card',
  standalone: true,
  imports: [
    HeroJobCardHeaderComponent,
    HeroJobCardDescriptionsListComponent
  ],
  template: `
  <article class="flex flex-col p-8 gap-4 dark:bg-gray-800 rounded-xl shadow-md">
    <hero-job-card-header [job]="job()" />
    <hero-job-card-descriptions-list [job]="job()" />
</article>
`
})
export class HeroJobCardComponent {
  job = input<HeroJob>();
}

export interface HeroJob {
  company: string;
  companyLogo: string;
  title: string;
  duration: string;
  descriptions: string[];
}