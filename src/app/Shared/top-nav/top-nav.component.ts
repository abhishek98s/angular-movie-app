import { Component, ViewChild, ElementRef, HostListener, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent {
  svg_color = '#EC7532'
  dropdown!: boolean;

  showNavbar: boolean = false;

  constructor(public appservices: AppService) {
    this.dropdown = this.appservices.dropdown;
  }

  showDropDown() {
    this.appservices.showDropDown();
    this.dropdown = this.appservices.dropdown;
  }

  changeColor() {
    this.svg_color = "#ffffff"
  }
  changeBack() {
    this.svg_color = "#EC7532"
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