import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelVisualComponent } from './travel-visual.component';

describe('TravelVisualComponent', () => {
  let component: TravelVisualComponent;
  let fixture: ComponentFixture<TravelVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
