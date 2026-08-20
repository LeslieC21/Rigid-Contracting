import { Component, inject } from '@angular/core';

import { BusinessReviews } from './components/business-reviews/business-reviews';
import { Services }  from './components/services/services';
import { WhyUsPage } from './components/why-us-page/why-us-page';
import { HookComponentContact } from '../../Shared Components/hook-component-contact/hook-component-contact';
import { StatsBar } from '../../Shared Components/stats-bar/stats-bar'

@Component({
  selector: 'app-home-page',
  imports: [BusinessReviews, Services, WhyUsPage, StatsBar],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
}
