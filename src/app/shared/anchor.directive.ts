import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { createAnimation, EasingFunctions } from '../animations';

const headerHeight = 70; // Should be kept in sync with _vars.scss

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective implements OnDestroy {
  @Input() appAnchor!: string;

  private subscription?: Subscription;
  private animationSubscription?: Subscription;
  constructor(@Inject(PLATFORM_ID) platformId: any, route: ActivatedRoute, private el: ElementRef<HTMLElement>) {
    if (!isPlatformBrowser(platformId)) {
      return;
    }

    this.subscription = route.fragment.pipe(debounceTime(500)).subscribe(fragment => {
      if (this.animationSubscription) {
        this.animationSubscription.unsubscribe();
        this.animationSubscription = undefined;
      }

      if (fragment === this.appAnchor) {
        this.scrollIntoView();
      }
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  private scrollIntoView() {
    if (!this.el || !this.el.nativeElement) {
      return;
    }

    const el = this.el.nativeElement;
    const scrolling = document.scrollingElement || document.body;
    if (!scrolling) {
      return;
    }

    const curScroll = scrolling.scrollTop;
    const scrollTo = el.offsetTop - headerHeight - 30; // 30 for padding
    const diff = scrollTo - curScroll;

    // scrolling.scrollTop = scrollTo;
    this.animationSubscription = createAnimation(500, EasingFunctions.easeInOutQuad)
      .pipe(
        map(t => t * diff)
      )
      .subscribe(amount => {
        scrolling.scrollTop = curScroll + amount;
    });



  }
}
