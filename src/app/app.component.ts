import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showNavbar: boolean = false;

  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', []) // for window scroll events
  onScroll() {
    if (window.pageYOffset > 100) {
      this.showNavbar = true;
    }

    if (window.pageYOffset < 100) {
      this.showNavbar = false;
    }

  }
}
