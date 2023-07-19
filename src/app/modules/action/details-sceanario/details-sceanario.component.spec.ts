import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSceanarioComponent } from './details-sceanario.component';

describe('DetailsSceanarioComponent', () => {
  let component: DetailsSceanarioComponent;
  let fixture: ComponentFixture<DetailsSceanarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSceanarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSceanarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
