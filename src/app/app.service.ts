import { Injectable } from '@angular/core';
import { Movie } from './Model/movie';

@Injectable({
  providedIn: 'root'
})



export class AppService {
  dropdown: boolean = false;

  movies: Movie[] = [
    {
      genre: "THRILLER, HORROR",
      title: "Daylight",
      description: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
      img: 'assets/images/daylight.jpg'
    },
    {
      genre: "THRILLER, HORROR",
      title: "Locked In",
      description: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
      img: 'assets/images/locked-in.jpg'
    },
    {
      genre: "THRILLER, HORROR",
      title: "The end of days",
      description: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.",
      img: 'assets/images/the-end-of-days.jpg'
    }
  ]

  getMovies() {
    return this.movies;
  }

  showDropDown() {
    this.dropdown = !this.dropdown
  }
}
