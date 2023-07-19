import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSimplifierSepecifiqueComponent } from './act-simplifier-sepecifique.component';

describe('ActSimplifierSepecifiqueComponent', () => {
  let component: ActSimplifierSepecifiqueComponent;
  let fixture: ComponentFixture<ActSimplifierSepecifiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActSimplifierSepecifiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActSimplifierSepecifiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
