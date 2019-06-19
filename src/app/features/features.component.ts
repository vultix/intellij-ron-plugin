import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { cache } from '../cache';
import { OS, OSService } from '../shared/os.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FeaturesComponent implements OnInit, OnDestroy {
  osType = new BehaviorSubject<OS>(this.osService.os);

  @cache('osType')
  get reformatKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌘⌥L';
      case 'win': return 'Ctrl+Alt+L';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get expandSelectionKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌥↑';
      case 'win': return 'Ctrl+W';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get shrinkSelectionKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌥↓';
      case 'win': return 'Ctrl+Shift+W';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get blockCommentKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌃⇧/';
      case 'win': return 'Ctrl+Shift+/';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get lineCommentKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌘/';
      case 'win': return 'Ctrl+/';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get parameterHintKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌘P';
      case 'win': return 'Ctrl+P';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get typeInfoKeys(): string {
    switch (this.osType.value) {
      case 'mac': return '⌃⇧P';
      case 'win': return 'Ctrl+Shift+P';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  @cache('osType')
  get quickDocsKeys(): string {
    switch (this.osType.value) {
      case 'mac': return 'F1';
      case 'win': return 'Ctrl+Q';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  get platform(): string {
    switch (this.osType.value) {
      case 'mac': return 'Mac OS X 10.5+ Default';
      case 'win': return 'Windows / Linux Default';
      default: throw Error('Unexpected os: ' + this.osType.value);
    }
  }

  constructor(private osService: OSService, private title: Title) {
    title.setTitle('Features');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.osType.complete();
  }

}
