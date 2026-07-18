import { Component, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SeoService } from '../../shared/seo.service';
import { SERVICES } from '../../shared/site-data';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  templateUrl: './services-page.html',
  styleUrl: './services-page.css',
})
export class ServicesPage implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly document = inject(DOCUMENT);

  readonly services = SERVICES;

  ngOnInit(): void {
    this.seo.update({
      title: 'Construction Services',
      description:
        'Rigid Contracting offers construction builds, excavation, remodeling, demolition, and installations across Menifee, Montgomery, Bath, Rowan, Clark and surrounding Central Kentucky counties.',
      path: '/services',
    });
    this.injectServiceSchema();
  }

  private injectServiceSchema(): void {
    const existing = this.document.getElementById('services-schema');
    if (existing) {
      existing.remove();
    }

    const script = this.document.createElement('script');
    script.id = 'services-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: this.services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: {
            '@type': 'GeneralContractor',
            name: 'Rigid Contracting',
          },
          areaServed: 'Central Kentucky',
        },
      })),
    });
    this.document.head.appendChild(script);
  }
}
