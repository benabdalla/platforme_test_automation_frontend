import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecActionComponent } from './add-sec-action.component';

describe('AddSecActionComponent', () => {
  let component: AddSecActionComponent;
  let fixture: ComponentFixture<AddSecActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
