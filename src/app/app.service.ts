import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  show: boolean = false;
  constructor() { }

  toggleNavbar() {
    this.show = this.show == true ? false : true;
  }
}
