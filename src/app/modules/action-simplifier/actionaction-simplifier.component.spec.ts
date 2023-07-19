import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionactionSimplifierComponent } from './actionaction-simplifier.component';

describe('ActionactionSimplifierComponent', () => {
  let component: ActionactionSimplifierComponent;
  let fixture: ComponentFixture<ActionactionSimplifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionactionSimplifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionactionSimplifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
