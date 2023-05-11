import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/Model/movie';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-coming-soon-movies',
  templateUrl: './coming-soon-movies.component.html',
  styleUrls: ['./coming-soon-movies.component.scss']
})
export class ComingSoonMoviesComponent implements OnInit {
  movies!: Movie[];


  constructor(public appService: AppService) {

  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },

      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.movies = this.appService.getMovies();
  }
}
