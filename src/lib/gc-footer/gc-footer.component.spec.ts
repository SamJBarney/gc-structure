import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GCFooterComponent } from './gc-footer.component';

describe('GCFooterComponent', () => {
  let component: GCFooterComponent;
  let fixture: ComponentFixture<GCFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GCFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GCFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
