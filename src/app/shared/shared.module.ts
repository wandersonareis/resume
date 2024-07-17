import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../projects/icon/src/public-api';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule,
    LinkButtonComponent,
    ThemeToggleComponent
  ],
  exports: [
    IconModule,
    LinkButtonComponent,
    ThemeToggleComponent
  ]
})
export class SharedModule { }
