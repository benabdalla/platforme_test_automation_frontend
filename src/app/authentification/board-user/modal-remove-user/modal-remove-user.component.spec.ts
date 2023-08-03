import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveUserComponent } from './modal-remove-user.component';

describe('ModalRemoveUserComponent', () => {
  let component: ModalRemoveUserComponent;
  let fixture: ComponentFixture<ModalRemoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRemoveUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
