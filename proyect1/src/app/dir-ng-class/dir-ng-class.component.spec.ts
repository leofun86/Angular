import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirNgClassComponent } from './dir-ng-class.component';

describe('DirNgClassComponent', () => {
  let component: DirNgClassComponent;
  let fixture: ComponentFixture<DirNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
