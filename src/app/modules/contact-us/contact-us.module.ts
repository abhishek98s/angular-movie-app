import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactHeroComponent } from './contact-hero/contact-hero.component';
import { ContactTopPageComponent } from './contact-top-page/contact-top-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ContactBodyComponent } from './contact-body/contact-body.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactHeroComponent,
    ContactTopPageComponent,
    ContactBodyComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactUsRoutingModule,
    RouterModule
  ]
})
export class ContactUsModule { }
