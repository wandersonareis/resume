import { NgModule } from '@angular/core';
import { IconModule } from '../../../projects/icon/src/public-api';
import { LinkButtonComponent } from './link-button/link-button.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { MailLinkComponent } from './mail-link/mail-link.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { BadgeComponent } from './badge/badge.component';
import { TitleAndDescriptionComponent } from './title-and-description/title-and-description.component';
import { ExternalLinkButtonComponent } from './external-link-button/external-link-button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MarkdownPipe } from './pipes/markdown.pipe';


const imports = [
  IconModule,
  MarkdownPipe,
  BadgeComponent,
  AvatarComponent,
  MailLinkComponent,
  CopyButtonComponent,
  LinkButtonComponent,
  ThemeToggleComponent,
  SocialLinksComponent,
  LanguageSelectorComponent,
  ExternalLinkButtonComponent,
  TitleAndDescriptionComponent
]

@NgModule({
  declarations: [],
  imports: imports,
  exports: imports
})
export class SharedModule { }
