import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import dotenv from 'dotenv';

dotenv.config();
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponentsModule,
    SharedModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume';
}
