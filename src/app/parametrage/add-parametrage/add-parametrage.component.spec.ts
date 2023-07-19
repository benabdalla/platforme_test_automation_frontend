import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParametrageComponent } from './add-parametrage.component';

describe('AddParametrageComponent', () => {
  let component: AddParametrageComponent;
  let fixture: ComponentFixture<AddParametrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddParametrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
