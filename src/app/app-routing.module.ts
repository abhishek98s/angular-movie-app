import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TopPageComponent } from './modules/home/top-page/top-page.component';
import { NewsTopPageComponent } from './modules/news/news-top-page/news-top-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', component: TopPageComponent },
  { path: 'what-on', loadChildren: () => import('./modules/what-on/what-on.module').then(m => m.WhatOnModule) },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) },
  { path: 'contact-us', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
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
