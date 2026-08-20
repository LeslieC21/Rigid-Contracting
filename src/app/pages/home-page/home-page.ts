import { Component, ElementRef, inject, ViewChild } from '@angular/core';

import { BusinessReviews } from './components/business-reviews/business-reviews';
import { Services }  from './components/services/services';
import { WhyUsPage } from './components/why-us-page/why-us-page';
import { StatsBar } from '../../Shared Components/stats-bar/stats-bar'
import { ServiceArea } from '../../Shared Components/service-area/service-area';
import { HookComponentContact } from '../../Shared Components/hook-component-contact/hook-component-contact'


@Component({
  selector: 'app-home-page',
  imports: [BusinessReviews, Services, WhyUsPage, StatsBar, ServiceArea, HookComponentContact],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage {}
