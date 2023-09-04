import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNoutFoundComponent } from './dialog-nout-found.component';

describe('DialogNoutFoundComponent', () => {
  let component: DialogNoutFoundComponent;
  let fixture: ComponentFixture<DialogNoutFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNoutFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNoutFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
