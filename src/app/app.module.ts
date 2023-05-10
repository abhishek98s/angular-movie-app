import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { TopPageComponent } from './modules/home/top-page/top-page.component';

import { NewInComponent } from './modules/home/new-in/new-in.component';
import { MovieComponent } from './modules/home/new-in/movie/movie.component';
import { ComingSoonComponent } from './modules/home/coming-soon/coming-soon.component';
import { HeroComponent } from './modules/home/hero/hero.component';
import { ComingSoonMoviesComponent } from './modules/home/coming-soon-movies/coming-soon-movies.component';

import { ComingSoonMovieComponent } from './modules/home/coming-soon-movie/coming-soon-movie.component';

import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NewInComponent,
    MovieComponent,
    ComingSoonComponent,
    ComingSoonMoviesComponent,
    ComingSoonMovieComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
