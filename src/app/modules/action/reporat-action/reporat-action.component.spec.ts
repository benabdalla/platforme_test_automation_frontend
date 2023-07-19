import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporatActionComponent } from './reporat-action.component';

describe('ReporatActionComponent', () => {
  let component: ReporatActionComponent;
  let fixture: ComponentFixture<ReporatActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporatActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporatActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
