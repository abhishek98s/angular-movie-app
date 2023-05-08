import { Component, ViewChild, ElementRef, HostListener, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})

export class TopNavComponent {
  svg_color = '#EC7532'

  changeColor() {
    this.svg_color = "#ffffff"
  }
  changeBack() {
    this.svg_color = "#EC7532"
  }



}