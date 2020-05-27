import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraNuevaComponent } from './compra-nueva.component';

describe('CompraNuevaComponent', () => {
  let component: CompraNuevaComponent;
  let fixture: ComponentFixture<CompraNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
