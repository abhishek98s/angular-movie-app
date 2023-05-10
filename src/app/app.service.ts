import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dropdown: boolean = false;

  showDropDown() {
    this.dropdown = !this.dropdown
  }
}
