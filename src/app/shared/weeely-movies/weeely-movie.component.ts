import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-weeely-movie',
  templateUrl: './weeely-movie.component.html',
  styleUrls: ['./weeely-movie.component.scss']
})
export class WeeelyMovieComponent implements OnInit {
  movies!: Movie[];
  MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  date = new Date();

  today = this.weekday[this.date.getDay()];
  currentDate = this.weekday[this.date.getDay()] + ", " + this.date.getDate() + " " + this.MonthNames[this.date.getMonth()]

  constructor(public appservices: AppService) {
  }
  @Input() set filteredMovies(value: Movie[]) {
    this.movies = value;
  }

  ngOnInit(): void {
    this.movies = this.appservices.getMovies();
  }
}
