import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Rigid Contracting';
  private readonly defaultImage = '/HomeBackground.jpg';
  private readonly baseUrl = 'https://www.rigidcontractingky.com';

  update(data: SeoData): void {
    const fullTitle = data.title.includes(this.siteName)
      ? data.title
      : `${data.title} | ${this.siteName}`;
    const image = data.image ?? this.defaultImage;
    const url = `${this.baseUrl}${data.path ?? '/'}`;
    const type = data.type ?? 'website';

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:locale', content: 'en_US' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: `${this.baseUrl}${image}` });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl}${image}` });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
