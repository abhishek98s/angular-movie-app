import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhatOnPageComponent } from './what-on-page/what-on-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'tops', pathMatch: 'full' },
  { path: 'tops', component: WhatOnPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatOnRoutingModule { }
