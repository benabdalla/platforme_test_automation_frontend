import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSimplifierDetailsComponent } from './act-simplifier-details.component';

describe('ActSimplifierDetailsComponent', () => {
  let component: ActSimplifierDetailsComponent;
  let fixture: ComponentFixture<ActSimplifierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActSimplifierDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActSimplifierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
