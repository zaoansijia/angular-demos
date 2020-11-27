import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideStatusComponent } from './slide-status.component';

describe('SlideStatusComponent', () => {
  let component: SlideStatusComponent;
  let fixture: ComponentFixture<SlideStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
