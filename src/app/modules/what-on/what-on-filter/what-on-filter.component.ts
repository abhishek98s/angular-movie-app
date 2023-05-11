import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-what-on-filter',
  templateUrl: './what-on-filter.component.html',
  styleUrls: ['./what-on-filter.component.scss']
})
export class WhatOnFilterComponent implements OnInit {
  filterInput: string = "";
  filteredMovies!: Movie[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  filterMovies() {
    this.filteredMovies = this.appService.getMovies()
    let filteredMoviesArr = this.filteredMovies.filter((movie: Movie) =>
      movie.title.match(this.filterInput));


    this.filteredMovies = filteredMoviesArr;
  }
}
