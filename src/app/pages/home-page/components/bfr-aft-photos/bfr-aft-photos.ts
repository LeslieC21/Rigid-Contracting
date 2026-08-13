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
  @Input({ required: true}) index!: number;

  // HTML Elements
  host = this.eRef.nativeElement;
  parentEle: HTMLElement | null = null;
  dragBar: HTMLElement | null = null;
  bfImg: HTMLElement | null = null;
  afImg: HTMLElement | null = null;

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
    const parentWidth = this.parentEle!.offsetWidth;
    const dragBarWidth = this.dragBar!.offsetWidth;

    this.pos1 = this.pos3 - e.clientX;
    this.pos3 = e.clientX;

    let newLeft = this.dragBar!.offsetLeft - this.pos1;

    const minLeft = 0;
    const maxLeft = parentWidth - dragBarWidth;

    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    this.dragBar!.style.left = newLeft + "px";

    const percentageVisible = (newLeft / maxLeft) * 100;
    this.bfImg!.style.clipPath = `inset(0 ${100 - percentageVisible}% 0 0)`;
    this.afImg!.style.clipPath = `inset(0 0 0 ${percentageVisible}%)`;
  }

  setInitialSplit(percent: number) {
    const maxLeft = this.parentEle!.offsetWidth - this.dragBar!.offsetWidth;
    const initialLeft = (percent / 100) * maxLeft;

    this.dragBar!.style.left = initialLeft + 'px';
    this.bfImg!.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    this.afImg!.style.clipPath = `inset(0 0 0 ${percent}%)`;
  }

  removeAnimations() {
    this.dragBar!.classList.remove('dbAni');
    this.bfImg!.classList.remove('bfAni');
    this.afImg!.classList.remove('afAni');
  }

  ngAfterViewInit() {
    this.parentEle = this.host.querySelector('.images') as HTMLElement;
    this.dragBar = this.host.querySelector('.drag-bar') as HTMLElement;
    this.bfImg = this.host.querySelector('.before-image') as HTMLElement;
    this.afImg = this.host.querySelector('.after-image') as HTMLElement;

    this.setInitialSplit(50);

    if(this.index === 0) {
      this.dragBar.classList.add('dbAni');
      this.bfImg.classList.add('bfAni');
      this.afImg.classList.add('afAni');

      document.addEventListener("click", () => {
        this.removeAnimations();
      })

      // Fix bug where after you resize the window the bar is at a different position than the reveal
      window.addEventListener('resize', () => {
        this.setInitialSplit(50);
      })
    }
  }

  ngOnDestroy() {
    document.onmousemove = null;
    document.onmouseup = null;
    window.removeEventListener('resize', () => {
      this.setInitialSplit(50);
    })
    document.addEventListener("click", () => {
      this.removeAnimations();
    })
  }
}
