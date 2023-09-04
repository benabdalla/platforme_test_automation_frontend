import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionSpecComponent } from './reunion-spec.component';

describe('ReunionSpecComponent', () => {
  let component: ReunionSpecComponent;
  let fixture: ComponentFixture<ReunionSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
