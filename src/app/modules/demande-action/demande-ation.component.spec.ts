import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAtionComponent } from './demande-ation.component';

describe('DemandeAtionComponent', () => {
  let component: DemandeAtionComponent;
  let fixture: ComponentFixture<DemandeAtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeAtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
