import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { SeoService } from '../../shared/seo.service';
import { BUSINESS, OWNERS } from '../../shared/site-data';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly owners = OWNERS;
  readonly business = BUSINESS;
  readonly mapSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://maps.google.com/maps?q=6224+US+HWY+460+W,+Frenchburg,+KY+40322&t=&z=14&ie=UTF8&iwloc=&output=embed',
  );

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact Us',
      description:
        'Contact Rigid Contracting in Frenchburg, KY for a free quote. Call Austin Richards or Justice Reed, or email us about your construction project in Central Kentucky.',
      path: '/contact',
    });
  }
}
