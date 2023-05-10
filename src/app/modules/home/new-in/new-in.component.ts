import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie } from 'src/app/Model/movie';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-new-in',
  templateUrl: './new-in.component.html',
  styleUrls: ['./new-in.component.scss']
})
export class NewInComponent implements OnInit {
  movies!: Movie[];


  constructor(public appService: AppService) {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
        items: 3
      }
    },
  }


  ngOnInit(): void {
    this.movies = this.appService.getMovies();
  }
}
