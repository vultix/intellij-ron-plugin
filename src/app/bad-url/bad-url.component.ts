import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bad-url',
  templateUrl: './bad-url.component.html',
  styleUrls: ['./bad-url.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadUrlComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('404 - IntelliJ Ron Plugin');
  }

  ngOnInit() {
  }

}
