import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('mobileNav') mobileNav!: ElementRef;
  dropdown: boolean;

  constructor(public appservices: AppService) {
    this.dropdown = this.appservices.dropdown;
  }

  showDropDown() {
    this.appservices.showDropDown();
    this.dropdown = this.appservices.dropdown;
  }

  @HostListener('document:scroll', ['$event'])
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if( this.dropdown && !this.mobileNav.nativeElement.contains(event.target)){
      this.showDropDown()
    }
  }

}
