import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCompantComponent } from './service-compant.component';

describe('ServiceCompantComponent', () => {
  let component: ServiceCompantComponent;
  let fixture: ComponentFixture<ServiceCompantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCompantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCompantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
