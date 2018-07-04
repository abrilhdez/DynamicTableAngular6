import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTable2Component } from './generic-table2.component';

describe('GenericTable2Component', () => {
  let component: GenericTable2Component;
  let fixture: ComponentFixture<GenericTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
