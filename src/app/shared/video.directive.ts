import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVideo]',
  host: {
    playsinline: ''
  }
})
export class VideoDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLVideoElement>) {}

  ngAfterViewInit(): void {
    const video = this.el.nativeElement;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
  }
}
