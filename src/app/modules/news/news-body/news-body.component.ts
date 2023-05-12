import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ComingSoonMovie } from 'src/app/Model/comingsoon';

@Component({
  selector: 'app-news-body',
  templateUrl: './news-body.component.html',
  styleUrls: ['./news-body.component.scss']
})
export class NewsBodyComponent implements OnInit {

  comingSoonMovies!: ComingSoonMovie[];

  constructor(private newsSrevice: NewsService) { }

  ngOnInit(): void {
    this.comingSoonMovies = this.newsSrevice.getMovies();
  }
}
