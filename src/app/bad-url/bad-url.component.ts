import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bad-url',
  templateUrl: './bad-url.component.html',
  styleUrls: ['./bad-url.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadUrlComponent implements OnInit {

  ngOnInit() {
  }

}
