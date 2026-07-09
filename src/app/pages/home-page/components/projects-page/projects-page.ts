import { Component } from '@angular/core';

import { BfrAftPhotos } from '../bfr-aft-photos/bfr-aft-photos';

@Component({
  selector: 'app-projects-page',
  imports: [BfrAftPhotos],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {}
