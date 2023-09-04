import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportScenarioComponent } from './report-scenario.component';

describe('ReportScenarioComponent', () => {
  let component: ReportScenarioComponent;
  let fixture: ComponentFixture<ReportScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportScenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
