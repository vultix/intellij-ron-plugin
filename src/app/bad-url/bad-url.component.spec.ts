import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadUrlComponent } from './bad-url.component';

describe('BadUrlComponent', () => {
  let component: BadUrlComponent;
  let fixture: ComponentFixture<BadUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
