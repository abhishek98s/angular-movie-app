import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/Model/movie';

@Component({
  selector: 'app-coming-soon-movie',
  templateUrl: './coming-soon-movie.component.html',
  styleUrls: ['./coming-soon-movie.component.scss']
})
export class ComingSoonMovieComponent {
  @Input() movie!: Movie;
}
