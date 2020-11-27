import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatesComponent } from './animates.component';

describe('AnimatesComponent', () => {
  let component: AnimatesComponent;
  let fixture: ComponentFixture<AnimatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
