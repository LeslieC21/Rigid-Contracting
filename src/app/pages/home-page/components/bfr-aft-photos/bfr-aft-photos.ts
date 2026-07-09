import { Component, Input, ElementRef, inject } from '@angular/core';

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
  @Input({ required: true }) beforePhoto!: string;
  @Input({ required: true }) afterPhoto!: string;

dragBarMouseDown(e: MouseEvent) {
    e.preventDefault();

    // Grab initial position of the drag bar
    this.pos3 = e.clientX;

  document.onmousemove = this.dragElement.bind(this);
  document.onmouseup = this.dragBarMouseUp.bind(this);
}

  dragBarMouseUp() {
    document.onmousemove = null;
    document.onmouseup = null;
  }

  dragElement(e: MouseEvent): void {
    const host = this.eRef.nativeElement;
    const dragBar = host.querySelector('.drag-bar') as HTMLElement;
    const parent = dragBar!.parentElement as HTMLElement;
    const parentWidth = parent!.offsetWidth;
    const dragBarWidth = dragBar!.offsetWidth;

    this.pos1 = this.pos3 - e.clientX;
    this.pos3 = e.clientX;

    let newLeft = dragBar!.offsetLeft - this.pos1;

    const minLeft = 0;
    const maxLeft = parentWidth - dragBarWidth;

    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    dragBar!.style.left = newLeft + "px";

    // Set the image visibility based on the drag bar position
    const beforeImage = host.querySelector('.before-image') as HTMLElement;
    const afterImage = host.querySelector('.after-image') as HTMLElement;

    const percentageVisible = (newLeft / maxLeft) * 100;
    beforeImage!.style.clipPath = `inset(0 ${100 - percentageVisible}% 0 0)`;
    afterImage!.style.clipPath = `inset(0 0 0 ${percentageVisible}%)`;
  }

  setInitialSplit(percent: number) {
    const host = this.eRef.nativeElement;
    const dragBar = host.querySelector('.drag-bar') as HTMLElement;
    const beforeImage = host.querySelector('.before-image') as HTMLElement;
    const afterImage = host.querySelector('.after-image') as HTMLElement;
    const parent = dragBar.parentElement as HTMLElement;

    const maxLeft = parent.offsetWidth - dragBar.offsetWidth;
    const initialLeft = (percent / 100) * maxLeft;

    dragBar.style.left = initialLeft + 'px';
    beforeImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    afterImage.style.clipPath = `inset(0 0 0 ${percent}%)`;
  }


  ngAfterViewInit() {
    this.setInitialSplit(50); // 50% split to start
  }

  ngOnDestroy() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
}
