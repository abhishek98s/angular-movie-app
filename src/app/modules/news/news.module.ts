import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsTopPageComponent } from './news-top-page/news-top-page.component';
import { NewsHeroComponent } from './news-hero/news-hero.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewsTopPageComponent,
    NewsHeroComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
