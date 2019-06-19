import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'docs'
  }
})
export class QuickStartComponent {

}
