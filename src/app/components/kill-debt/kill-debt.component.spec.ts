import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillDebtComponent } from './kill-debt.component';

describe('KillDebtComponent', () => {
  let component: KillDebtComponent;
  let fixture: ComponentFixture<KillDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
