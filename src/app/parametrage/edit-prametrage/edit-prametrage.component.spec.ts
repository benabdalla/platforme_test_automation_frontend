import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrametrageComponent } from './edit-prametrage.component';

describe('EditPrametrageComponent', () => {
  let component: EditPrametrageComponent;
  let fixture: ComponentFixture<EditPrametrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPrametrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPrametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
