import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriqueScenarioComponent } from './generique-scenario.component';

describe('GeneriqueScenarioComponent', () => {
  let component: GeneriqueScenarioComponent;
  let fixture: ComponentFixture<GeneriqueScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneriqueScenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneriqueScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
