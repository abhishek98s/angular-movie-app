import { Component, HostListener } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent {
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
