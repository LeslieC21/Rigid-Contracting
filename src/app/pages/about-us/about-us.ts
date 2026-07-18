import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../shared/seo.service';
import { BUSINESS, OWNERS } from '../../shared/site-data';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs implements OnInit {
  private readonly seo = inject(SeoService);

  readonly business = BUSINESS;
  readonly owners = OWNERS;

  ngOnInit(): void {
    this.seo.update({
      title: 'About Us',
      description:
        'Rigid Contracting is a family-owned construction business based in Frenchburg, KY. Learn why clients choose Austin Richards and Justice Reed for builds, remodeling, and excavation.',
      path: '/about',
      image: '/pic.jpg',
    });
  }
}
