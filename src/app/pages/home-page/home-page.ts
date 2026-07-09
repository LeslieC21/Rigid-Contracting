import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { BusinessReviews } from './components/business-reviews/business-reviews';
import { Services }  from './components/services/services';
import { ProjectsPage } from './components/projects-page/projects-page';
import { WhyUsPage } from './components/why-us-page/why-us-page';

@Component({
  selector: 'app-home-page',
  imports: [BusinessReviews, Services, ProjectsPage, WhyUsPage, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  scrollToPhotos() {
    const target = document.getElementById("project-photos");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}
