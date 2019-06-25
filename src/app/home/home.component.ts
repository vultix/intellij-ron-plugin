import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('video', {static: false}) video?: ElementRef<HTMLVideoElement>;


  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.video && this.video.nativeElement) {
      this.video.nativeElement.muted = true;
      this.video.nativeElement.play();
    }
  }


  goToPlugin(): void {
    window.location.href = 'https://plugins.jetbrains.com/plugin/12635-ron-rusty-object-notation-';
  }
}
