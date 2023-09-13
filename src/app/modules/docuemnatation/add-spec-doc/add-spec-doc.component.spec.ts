import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecDocComponent } from './add-spec-doc.component';

describe('AddSpecDocComponent', () => {
  let component: AddSpecDocComponent;
  let fixture: ComponentFixture<AddSpecDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
