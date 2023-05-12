import { Component, Input } from '@angular/core';
import { ComingSoonMovie } from 'src/app/Model/comingsoon';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent {

  @Input() NewsMovie!:ComingSoonMovie;

}
