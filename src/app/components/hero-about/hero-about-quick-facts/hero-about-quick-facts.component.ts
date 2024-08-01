import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'hero-about-quick-facts-list',
  standalone: true,
  imports: [],
  template: `
  <p class="mb-4">{{ quickFacts()?.title }}</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
  @for (fact of quickFacts()?.facts; track $index) {
  <ul class="text-base text-wrap px-4 gap-3">
    <li class="list-disc">
      <span>{{ fact }}</span>
    </li>
  </ul>
  }
</div>
`
})
export class HeroAboutQuickFactsComponent {
  quickFacts = input<AboutQuickFacts>();
}

export type AboutQuickFacts = { title: string; facts: string[] };
