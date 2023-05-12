import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NewsRoutingModule } from './news-routing.module';
import { NewsTopPageComponent } from './news-top-page/news-top-page.component';
import { NewsHeroComponent } from './news-hero/news-hero.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { NewsBodyComponent } from './news-body/news-body.component';
import { NewsPostComponent } from './news-post/news-post.component';
import { NewsSidebarComponent } from './news-sidebar/news-sidebar.component';


@NgModule({
  declarations: [
    NewsTopPageComponent,
    NewsHeroComponent,
    NewsBodyComponent,
    NewsPostComponent,
    NewsSidebarComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class NewsModule { }
