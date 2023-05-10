import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';

@Component({
  selector: 'app-weekly-movie-list',
  templateUrl: './weekly-movie-list.component.html',
  styleUrls: ['./weekly-movie-list.component.scss']
})
export class WeeklyMovieListComponent implements OnInit {
  @Input() movie!: Movie;

  // constructor() {
  // }

  ngOnInit(): void {
    console.log(this.movie)
  }
}
