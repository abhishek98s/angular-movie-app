import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WhatOnRoutingModule } from './what-on-routing.module';

import { WhatOnHeroComponent } from './what-on-hero/what-on-hero.component';

import { SharedModule } from 'src/app/shared/shared.module';

import { WhatOnPageComponent } from './what-on-page/what-on-page.component';
import { WhatOnFilterComponent } from './what-on-filter/what-on-filter.component';
@NgModule({
  declarations: [
    WhatOnHeroComponent,
    WhatOnPageComponent,
    WhatOnFilterComponent
  ],
  imports: [
    CommonModule,
    WhatOnRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class WhatOnModule { }
