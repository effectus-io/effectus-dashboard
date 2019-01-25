import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceVisualComponent } from './resource-visual.component';

describe('ResourceVisualComponent', () => {
  let component: ResourceVisualComponent;
  let fixture: ComponentFixture<ResourceVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
