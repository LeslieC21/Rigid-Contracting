import { Component, ElementRef, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  imports: [],
  templateUrl: './stats-bar.html',
  styleUrl: './stats-bar.css',
})
export class StatsBar {
  @ViewChild('statsBar') statsBarRef!: ElementRef<HTMLElement>;
  @ViewChildren('statNum') statNums!: QueryList<ElementRef<HTMLElement>>;

  hasAnimated = signal<boolean>(false);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !this.hasAnimated()) {
          this.hasAnimated.set(true);
          this.statNums.forEach(eleRef => this.animateStatBar(eleRef.nativeElement));
          this.observer?.disconnect();
        }
      });
    }, { threshold: 0.8 });

    this.observer.observe(this.statsBarRef.nativeElement);
  }

  private animateStatBar(ele: HTMLElement): void {
    const target = parseFloat(ele.getAttribute('data-target')!);
    const suffix = ele.getAttribute('data-suffix') || '';
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1- progress, 3);
      const currentVal = Math.floor(eased * target);
      ele.textContent = currentVal + suffix;

      if(progress < 1) {
        requestAnimationFrame(tick);
      } else {
        ele.textContent = target + suffix;
      }
    };

    requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
