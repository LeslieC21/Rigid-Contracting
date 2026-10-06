import { Component, Input, ElementRef, inject, signal } from '@angular/core';

import { bfrAfrModel } from '../../../projects-page/projects-page';

@Component({
  selector: 'app-bfr-aft-photos',
  imports: [],
  templateUrl: './bfr-aft-photos.html',
  styleUrl: './bfr-aft-photos.css',
})
export class BfrAftPhotos {
  // Injects
  eRef = inject(ElementRef);

  // Drag bar
  pos1 = 0; pos2 = 0; pos3 = 0; pos4 = 0;
  isDragging = signal<boolean>(false);
  @Input({ required: true }) project!: bfrAfrModel;
  @Input({ required: true}) index!: number;
  private percent = 50;
  private onDocClick = () => this.freezeAnimation();
  private onResize = () => this.applySplit(this.percent);

  // HTML Elements
  host = this.eRef.nativeElement;
  parentEle: HTMLElement | null = null;
  dragBar: HTMLElement | null = null;
  bfImg: HTMLElement | null = null;
  afImg: HTMLElement | null = null;

  dragBarPointerDown(e: PointerEvent) {
    e.preventDefault();

    this.freezeAnimation();
    this.isDragging.set(true);
    this.pos3 = e.clientX;

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  dragBarPointerUp(e: PointerEvent) {
    this.isDragging.set(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  }

  dragElement(e: PointerEvent): void {
    if (!this.isDragging()) return;

    const rect = this.parentEle!.getBoundingClientRect();
    const barWidth = this.dragBar!.offsetWidth;
    const maxLeft = rect.width - barWidth;

    // Center bar under pointer
    const newLeft = Math.max(0, Math.min(e.clientX - rect.left - barWidth / 2, maxLeft));
    this.applySplit((newLeft / maxLeft) * 100);
  }

  applySplit(percent: number) {
    this.percent = percent;
    const maxLeft = this.parentEle!.offsetWidth - this.dragBar!.offsetWidth;
    this.dragBar!.style.left = (percent / 100) * maxLeft + 'px'
    this.bfImg!.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    this.afImg!.style.clipPath = `inset(0 0 0 ${percent}%)`;
  }

  freezeAnimation() {
    if (!this.dragBar!.classList.contains('dbAni')) return;

    const maxLeft = this.parentEle!.offsetWidth - this.dragBar!.offsetWidth;
    const percent = (this.dragBar!.offsetLeft / maxLeft) * 100;

    this.dragBar!.classList.remove('dbAni');
    this.bfImg!.classList.remove('bfAni');
    this.afImg!.classList.remove('afAni');

    this.applySplit(percent);
  }

  ngAfterViewInit() {
    this.parentEle = this.host.querySelector('.images') as HTMLElement;
    this.dragBar = this.host.querySelector('.drag-bar') as HTMLElement;
    this.bfImg = this.host.querySelector('.before-image') as HTMLElement;
    this.afImg = this.host.querySelector('.after-image') as HTMLElement;

    this.applySplit(50);

    if(this.index === 0) {
      this.dragBar.classList.add('dbAni');
      this.bfImg.classList.add('bfAni');
      this.afImg.classList.add('afAni');

      document.addEventListener("click", this.onDocClick)
    }
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize)
    document.addEventListener("click", this.onDocClick)
  }
}
