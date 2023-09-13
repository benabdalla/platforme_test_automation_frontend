import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuemnatationComponent } from './docuemnatation.component';

describe('DocuemnatationComponent', () => {
  let component: DocuemnatationComponent;
  let fixture: ComponentFixture<DocuemnatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocuemnatationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocuemnatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
