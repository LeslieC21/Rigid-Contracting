import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  mobileNavOpen = signal<boolean>(false);

  toggleNav() {
    this.mobileNavOpen.update(x => !x);
  }
}
