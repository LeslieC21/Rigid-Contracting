import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);

  mobileNavOpen = signal(false);
  closeButton = viewChild<ElementRef<HTMLButtonElement>>('closeButton');

  readonly navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor() {
    effect(() => {
      const open = this.mobileNavOpen();
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        queueMicrotask(() => this.closeButton()?.nativeElement.focus());
      }
    });
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  toggleNav(): void {
    this.mobileNavOpen.update((open) => !open);
  }

  closeNav(): void {
    this.mobileNavOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.mobileNavOpen()) {
      this.closeNav();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.mobileNavOpen() || event.key !== 'Tab') {
      return;
    }

    const drawer = this.host.nativeElement.querySelector('.side_navbar_inner') as HTMLElement | null;
    if (!drawer) {
      return;
    }

    const focusable = Array.from(
      drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    );
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
