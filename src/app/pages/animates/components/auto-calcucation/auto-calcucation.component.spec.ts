import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCalcucationComponent } from './auto-calcucation.component';

describe('AutoCalcucationComponent', () => {
  let component: AutoCalcucationComponent;
  let fixture: ComponentFixture<AutoCalcucationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCalcucationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCalcucationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
