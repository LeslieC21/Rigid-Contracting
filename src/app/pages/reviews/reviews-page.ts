import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../shared/seo.service';
import { REVIEWS } from '../../shared/site-data';

@Component({
  selector: 'app-reviews-page',
  imports: [RouterLink],
  templateUrl: './reviews-page.html',
  styleUrl: './reviews-page.css',
})
export class ReviewsPage implements OnInit {
  private readonly seo = inject(SeoService);

  readonly reviews = REVIEWS;

  ngOnInit(): void {
    this.seo.update({
      title: 'Customer Reviews',
      description:
        'Read what customers say about Rigid Contracting — family-owned construction serving Menifee, Montgomery, Bath, Rowan, Clark and surrounding Kentucky counties.',
      path: '/reviews',
    });
  }
}
