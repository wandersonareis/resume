import { Component, effect, ElementRef, inject, input, numberAttribute, OnChanges, SimpleChanges } from '@angular/core';
import { loadIcon } from 'iconify-icon';
import { SafeHtmlPipe } from '../safe-html.pipe';


@Component({
  selector: 'icon',
  exportAs: 'icon',
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  template: `
  @if (loaded) {
<ng-container>
  <svg [attr.viewBox]="viewBox" [innerHTML]="path | safeHtml"></svg>
</ng-container>
} @else {
<ng-container>
  <div class="placeholder"></div>
</ng-container>
}
`,
  styleUrl: './icon.component.css',
  host: {
    class: 'icon',
    '[class.is-loaded]': 'isLoaded'
  }
})
export class IconComponent implements OnChanges {
  private _elementRef = inject(ElementRef);

  name = input<string | any>();
  size = input<number | any>({ transform: numberAttribute });

  constructor() {
    effect(() => {
      this._elementRef.nativeElement.style.setProperty('--icon-svg-size', this.size() + 'px');
    })
  }

  path = '';
  loaded = false;

  private _viewBoxWidth = 0;
  private _viewBoxHeight = 0;

  get viewBox() {
    return `0 0 ${this._viewBoxWidth} ${this._viewBoxHeight}`
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && changes['name'].currentValue !== changes['name'].previousValue) {
      this._loadIcon();
    }
  }

  private _loadIcon() {
    this.loaded = false;
    loadIcon(this.name())
      .then(data => {
        this.path = data.body;
        this._viewBoxWidth = data.width;
        this._viewBoxHeight = data.height;
        this.loaded = true;
      })
      ;
  }
}
