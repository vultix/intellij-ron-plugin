import { Component } from '@angular/core';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { PageService } from './page.service';
import { AttachedPositionStrategy } from 'vx-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'documentation';

  positionStrategy: AttachedPositionStrategy = [
    {
        menuX: 'right',
        menuY: 'top' ,
      attachedX: 'right',
      attachedY: 'bottom',
      height: 200,
      width: 300,
      offsetX: 0,
      offsetY: 10,
      // className?: string;
    }
  ];

  constructor(public pageService: PageService, private faService: FaIconService) {
    faService.defaultPrefix = 'far';
  }
}
