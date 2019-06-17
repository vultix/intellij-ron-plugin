import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicenseComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('IntelliJ-RON License');
  }

  ngOnInit() {
  }

}
