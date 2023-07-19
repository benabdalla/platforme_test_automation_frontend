import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSimplifierReportComponent } from './act-simplifier-report.component';

describe('ActSimplifierReportComponent', () => {
  let component: ActSimplifierReportComponent;
  let fixture: ComponentFixture<ActSimplifierReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActSimplifierReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActSimplifierReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
