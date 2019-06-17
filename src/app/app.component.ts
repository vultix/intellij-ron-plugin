import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaIconService } from '@fortawesome/angular-fontawesome';
import { AttachedPositionStrategy } from 'vx-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  routes = [
    {name: 'Home', route: '/'},
    {name: 'Features', route: '/features'},
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

  constructor(private faService: FaIconService, private title: Title) {
    faService.defaultPrefix = 'far';

    this.title.setTitle('IntelliJ-RON Plugin')
  }
}
