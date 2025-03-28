import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { StarsComponent } from './stars/stars.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { WeeelyMovieComponent } from './weeely-movies/weeely-movie.component';
import { WeeklyMovieListComponent } from './weekly-movie/weekly-movie-list.component';

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
    CommonModule,
    FormsModule,
    RouterModule
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
