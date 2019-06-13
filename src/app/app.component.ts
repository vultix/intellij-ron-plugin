import { Component } from '@angular/core';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { AttachedPositionStrategy } from 'vx-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'documentation';
  routes = [
    {name: 'Home', route: '/'},
    {name: 'Plugin License', route: '/license'},
  ];

  positionStrategy: AttachedPositionStrategy = [
    {
        menuX: 'right',
        menuY: 'top' ,
      attachedX: 'right',
      attachedY: 'bottom',
      height: 200,
      width: 'auto',
      offsetX: 0,
      offsetY: 10,
      // className?: string;
    }
  ];

  constructor(private faService: FaIconService) {
    faService.defaultPrefix = 'far';
  }
}
