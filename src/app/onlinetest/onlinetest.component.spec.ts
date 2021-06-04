import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinetestComponent } from './onlinetest.component';

describe('OnlinetestComponent', () => {
  let component: OnlinetestComponent;
  let fixture: ComponentFixture<OnlinetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
