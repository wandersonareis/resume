import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBarComponent } from './navegations/footer-bar/footer-bar.component';
import { HeaderBarComponent } from './navegations/header-bar/header-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { HeroAboutComponent } from './hero-about/hero-about.component';
import { HeroSkillsComponent } from './hero-skills/hero-skills.component';
import { HeroJobsComponent } from './hero-jobs/hero-jobs.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderBarComponent,
    HeroComponent,
    HeroAboutComponent,
    HeroSkillsComponent,
    HeroJobsComponent,
    ContactComponent,
    FooterBarComponent
  ],
  exports: [
    HeaderBarComponent,
    HeroComponent,
    HeroAboutComponent,
    HeroSkillsComponent,
    HeroJobsComponent,
    ContactComponent,
    FooterBarComponent
  ]
})
export class ComponentsModule { }
