import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPowerfulBusinessAutomationSystemComponent } from './most-powerful-business-automation-system.component';

describe('MostPowerfulBusinessAutomationSystemComponent', () => {
  let component: MostPowerfulBusinessAutomationSystemComponent;
  let fixture: ComponentFixture<MostPowerfulBusinessAutomationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostPowerfulBusinessAutomationSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPowerfulBusinessAutomationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
