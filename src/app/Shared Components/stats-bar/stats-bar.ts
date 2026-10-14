import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, QueryList, signal, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  imports: [],
  templateUrl: './stats-bar.html',
  styleUrl: './stats-bar.css',
})
export class StatsBar {
  @ViewChild('statsBar') statsBarRef!: ElementRef<HTMLElement>;
  @ViewChildren('statNum') statNums!: QueryList<ElementRef<HTMLElement>>;

  stats = [
    { target: 30, suffix: '+', label: 'Years Combined Experience'},
    { target: 20, suffix: '+', label: 'Projects Completed' },
    { target: 100, suffix: '%', label: 'Satisfaction Guarantee' },
    { target: 100, suffix: '%', label: 'Licensed & Insured' },
  ]

  hasAnimated = signal<boolean>(false);
  private observer?: IntersectionObserver;
  private rafIds: number[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if(!isPlatformBrowser(this.platformId)) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver((entries) => {
      if (this.hasAnimated()) return;
      if (entries.some(e => e.isIntersecting)) {
        this.hasAnimated.set(true);
        this.statNums.forEach(ref => this.animate(ref.nativeElement));
        this.observer?.disconnect();
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    this.observer.observe(this.statsBarRef.nativeElement);
  }

  private animate(el: HTMLElement): void {
    const target = Number(el.dataset['target']);
    const suffix = el.dataset['suffix'] ?? '';
    const duration = 1500;
    let start: number | null = null;

    el.textContent = '0' + suffix;

    const tick = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;

      if (progress < 1) {
        this.rafIds.push(requestAnimationFrame(tick));
      } else {
        el.textContent = target + suffix;
      }
    };

    this.rafIds.push(requestAnimationFrame(tick));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.rafIds.forEach(cancelAnimationFrame);
  }
}
