import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from '../../services/theme.service';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <button
      type="button"
      [attr.aria-label]="ariaLabel"
      [attr.aria-pressed]="theme() === 'dark'"
      (click)="toggleTheme()"
      class="flex items-center cursor-pointer focus:outline-none"
    >
      <div class="flex items-center dark:hidden">
        <lucide-icon [img]="moonIcon" [size]="24" [strokeWidth]="1.5" class="text-theme-900" />
      </div>
      <div class="hidden dark:flex dark:items-center">
        <lucide-icon [img]="sunIcon" [size]="24" [strokeWidth]="1.5" class="text-theme-50" />
      </div>
    </button>
  `,
})
export class ThemeToggleComponent {
  readonly sunIcon = Sun;
  readonly moonIcon = Moon;

  private themeService = inject(ThemeService);
  readonly theme = toSignal(this.themeService.theme$, {
    initialValue: 'light' as const,
  });

  get ariaLabel(): string {
    return this.theme() === 'dark'
      ? 'Switch to light theme'
      : 'Switch to dark theme';
  }

  toggleTheme(): void {
    this.themeService.toggleDarkMode();
  }
}
