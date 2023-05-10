import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {

  @Input() width?: number;


  starWidth = `w-[12px]`;

  constructor() {
  }


}
