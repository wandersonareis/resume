import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './navegations/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './navegations/header-bar/header-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderBarComponent,
    HeroComponent,
    ContactComponent,
    FooterBarComponent
  ],
  exports: [
    HeaderBarComponent,
    HeroComponent,
    ContactComponent,
    FooterBarComponent
  ]
})
export class ComponentsModule { }
