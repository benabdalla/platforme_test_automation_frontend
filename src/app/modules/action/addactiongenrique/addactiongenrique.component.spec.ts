import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactiongenriqueComponent } from './addactiongenrique.component';

describe('AddactiongenriqueComponent', () => {
  let component: AddactiongenriqueComponent;
  let fixture: ComponentFixture<AddactiongenriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddactiongenriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddactiongenriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
