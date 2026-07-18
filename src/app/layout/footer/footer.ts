import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BUSINESS, OWNERS } from '../../shared/site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  year = new Date().getFullYear();
  readonly business = BUSINESS;
  readonly owners = OWNERS;

  readonly quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];
}
