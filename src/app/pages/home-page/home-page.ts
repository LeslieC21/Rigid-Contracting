import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../shared/seo.service';
import { SERVICES } from '../../shared/site-data';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit {
  private readonly seo = inject(SeoService);

  readonly highlightServices = SERVICES.slice(0, 4);

  ngOnInit(): void {
    this.seo.update({
      title: 'Rigid Contracting | Central Kentucky Construction Services',
      description:
        'Family-owned construction business in Frenchburg, KY serving Menifee, Montgomery, Bath, Rowan, Clark and surrounding counties. Builds, excavation, remodeling, demolition, and installations.',
      path: '/',
      image: '/HomeBackground.jpg',
    });
  }
}
