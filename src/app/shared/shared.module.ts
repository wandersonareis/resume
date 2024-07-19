import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../projects/icon/src/public-api';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { MailLinkComponent } from './mail-link/mail-link.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { BadgeComponent } from './badge/badge.component';
import { TitleAndDescriptionComponent } from './title-and-description/title-and-description.component';
import { ExternalLinkButtonComponent } from './external-link-button/external-link-button.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconModule,
    LinkButtonComponent,
    ThemeToggleComponent,
    MailLinkComponent,
    CopyButtonComponent,
    SocialLinksComponent,
    BadgeComponent,
    ExternalLinkButtonComponent,
    TitleAndDescriptionComponent
  ],
  exports: [
    IconModule,
    LinkButtonComponent,
    ThemeToggleComponent,
    MailLinkComponent,
    CopyButtonComponent,
    SocialLinksComponent,
    BadgeComponent,
    ExternalLinkButtonComponent,
    TitleAndDescriptionComponent
  ]
})
export class SharedModule { }
