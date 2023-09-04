import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionReportComponent } from './reunion-report.component';

describe('ReunionReportComponent', () => {
  let component: ReunionReportComponent;
  let fixture: ComponentFixture<ReunionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
