import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionGenirqueComponent } from './reunion-genirque.component';

describe('ReunionGenirqueComponent', () => {
  let component: ReunionGenirqueComponent;
  let fixture: ComponentFixture<ReunionGenirqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunionGenirqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionGenirqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
