import { Component } from '@angular/core';

@Component({
  selector: 'app-weeely-movie',
  templateUrl: './weeely-movie.component.html',
  styleUrls: ['./weeely-movie.component.scss']
})
export class WeeelyMovieComponent {
  date = new Date();
  MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    console.log(this.MonthNames[this.date.getMonth()])
  }
}
