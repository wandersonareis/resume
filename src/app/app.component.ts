import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesModule, ComponentsModule],
  template: `
    <app-header-bar />
    <main>
      <router-outlet />
    </main>
    <app-contact-page />
    <app-footer-bar />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'resume';
}
