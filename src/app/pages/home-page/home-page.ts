import { Component, inject } from '@angular/core';

import { BusinessReviews } from './components/business-reviews/business-reviews';
import { Services }  from './components/services/services';
import { WhyUsPage } from './components/why-us-page/why-us-page';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  imports: [BusinessReviews, Services, WhyUsPage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
}
