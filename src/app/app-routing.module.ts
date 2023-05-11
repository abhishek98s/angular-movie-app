import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TopPageComponent } from './modules/home/top-page/top-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'what-on', loadChildren: () => import('./modules/what-on/what-on.module').then(m => m.WhatOnModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
export const routingComponents = [
  TopPageComponent
]