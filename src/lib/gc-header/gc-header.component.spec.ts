import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GCHeaderComponent } from './gc-header.component';

describe('GCHeaderComponent', () => {
  let component: GCHeaderComponent;
  let fixture: ComponentFixture<GCHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GCHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GCHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
