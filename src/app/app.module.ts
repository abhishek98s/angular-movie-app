import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './Model/top-nav/top-nav.component';
import { HeroComponent } from './Model/hero/hero.component';

import { CommonModule } from '@angular/common';
import { NavComponent } from './Model/hero/nav/nav.component';
import { NewInComponent } from './Model/new-in/new-in.component';
import { MovieListComponent } from './Model/new-in/movie-list/movie-list.component';
import { MovieComponent } from './Model/new-in/movie-list/movie/movie.component';
import { WeeelyMovieComponent } from './Model/weeely-movie/weeely-movie.component';
import { WeeklyMovieListComponent } from './Model/weeely-movie/weekly-movie-list/weekly-movie-list.component';
import { ComingSoonComponent } from './Model/coming-soon/coming-soon.component';
import { StarsComponent } from './Shared/stars/stars.component';
import { RouterModule } from '@angular/router';
import { ComingSoonMoviesComponent } from './Model/coming-soon/coming-soon-movies/coming-soon-movies.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComingSoonMovieComponent } from './Model/coming-soon/coming-soon-movies/coming-soon-movie/coming-soon-movie.component';
import { ContactComponent } from './Model/contact/contact.component';
import { FooterComponent } from './Model/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HeroComponent,
    NavComponent,
    NewInComponent,
    MovieListComponent,
    MovieComponent,
    WeeelyMovieComponent,
    WeeklyMovieListComponent,
    ComingSoonComponent,
    StarsComponent,
    ComingSoonMoviesComponent,
    ComingSoonMovieComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
