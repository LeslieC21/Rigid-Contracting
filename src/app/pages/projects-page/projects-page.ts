import { Component, signal } from '@angular/core';

import { BfrAftPhotos } from '../home-page/components/Project/bfr-aft-photos';
import { HookComponent } from '../../Shared Components/hook-component/hook-component';

export interface bfrAfrModel {
  description: string;
  location: string;
  before: string;
  after: string;
}

const AUTO_ADVANCE_MS = 8000;

@Component({
  selector: 'app-projects-page',
  imports: [BfrAftPhotos, HookComponent],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})

export class ProjectsPage {
  bfrAfrImages: bfrAfrModel[] = [
    { description: 'Interior Renovation', location: 'Mt. Sterling, KY', before: '/interior1.jpg', after: '/interior2.jpg' },
    { description: 'Driveway Installation', location: 'Mt. Sterling, KY', before: '/driveway1.jpg', after: '/driveway2.jpg' },
    { description: 'External Repair After Equipment Replacement', location: 'Mt. Sterling, KY', before: '/electric1.jpg', after: '/electric2.jpg' },
    { description: 'Garage Construction', location: 'Mt. Sterling, KY', before: '/barn1.jpg', after: '/barn2.jpg' },
  ]
  
  projectPhotos = ["airViewBuilding.jpg", "barn1.jpg", "barn2.jpg"]
  currentPhoto = signal(0);
  private timer: ReturnType<typeof setInterval> | undefined;

  nextPhoto(): void {
    this.currentPhoto.set((this.currentPhoto() + 1) % this.projectPhotos.length);
    this.startAutoAdvance();
  }

  previousPhoto(): void {
    this.currentPhoto.set((this.currentPhoto() - 1) % this.projectPhotos.length);
    this.startAutoAdvance();
  }

  private startAutoAdvance(): void {
    this.clearTimer();
    this.timer = setInterval(() => {
      this.nextPhoto();
    }, AUTO_ADVANCE_MS);
  }

  private clearTimer(): void {
    if(this.timer !== undefined) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  ngOnInit(): void {
    this.startAutoAdvance();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }
}
