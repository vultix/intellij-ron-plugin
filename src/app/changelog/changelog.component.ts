import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  host: {
    class: 'docs'
  }
})
export class ChangelogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
