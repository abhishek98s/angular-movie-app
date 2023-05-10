import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    TopNavComponent,
    FooterComponent,
    StarsComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavComponent,
    FooterComponent,
    StarsComponent,
    NavComponent,
    ContactComponent
  ]
})
export class SharedModule { }
