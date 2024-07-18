import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './navegations/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './navegations/header-bar/header-bar.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderBarComponent,
    ContactComponent,
    FooterBarComponent
  ],
  exports: [
    HeaderBarComponent,
    ContactComponent,
    FooterBarComponent
  ]
})
export class ComponentsModule { }
