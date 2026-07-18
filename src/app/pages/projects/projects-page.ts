import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BfrAftPhotos } from '../../shared/bfr-aft-photos/bfr-aft-photos';
import { SeoService } from '../../shared/seo.service';
import { PROJECTS } from '../../shared/site-data';

@Component({
  selector: 'app-projects-page',
  imports: [BfrAftPhotos, RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage implements OnInit {
  private readonly seo = inject(SeoService);

  readonly projects = PROJECTS;

  ngOnInit(): void {
    this.seo.update({
      title: 'Recent Projects',
      description:
        'Browse recent Rigid Contracting projects across Central Kentucky — interior renovations, driveway installation, repairs, and garage construction with before-and-after photos.',
      path: '/projects',
      image: '/interior2.jpg',
    });
  }
}
