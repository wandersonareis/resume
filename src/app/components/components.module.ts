import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './navegations/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './navegations/header-bar/header-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderBarComponent,
    FooterBarComponent
  ],
  exports: [
    HeaderBarComponent,
    FooterBarComponent
  ]
})
export class ComponentsModule { }
