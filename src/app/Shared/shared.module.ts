import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { WeeelyMovieComponent } from './weeely-movie/weeely-movie.component';
import { WeeklyMovieListComponent } from './weekly-movie-list/weekly-movie-list.component';

@NgModule({
  declarations: [
    TopNavComponent,
    FooterComponent,
    StarsComponent,
    NavComponent,
    ContactComponent,
    WeeelyMovieComponent,
    WeeklyMovieListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavComponent,
    FooterComponent,
    StarsComponent,
    NavComponent,
    ContactComponent,
    WeeelyMovieComponent,
    WeeklyMovieListComponent
  ]
})
export class SharedModule { }
