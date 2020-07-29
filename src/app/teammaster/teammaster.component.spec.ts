import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammasterComponent } from './teammaster.component';

describe('TeammasterComponent', () => {
  let component: TeammasterComponent;
  let fixture: ComponentFixture<TeammasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
