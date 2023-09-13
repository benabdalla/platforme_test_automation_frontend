import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenirqueDocComponent } from './add-genirque-doc.component';

describe('AddGenirqueDocComponent', () => {
  let component: AddGenirqueDocComponent;
  let fixture: ComponentFixture<AddGenirqueDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGenirqueDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGenirqueDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
