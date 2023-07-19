import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActSimplifierGeniriqueComponent } from './act-simplifier-genirique.component';

describe('ActSimplifierGeniriqueComponent', () => {
  let component: ActSimplifierGeniriqueComponent;
  let fixture: ComponentFixture<ActSimplifierGeniriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActSimplifierGeniriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActSimplifierGeniriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
