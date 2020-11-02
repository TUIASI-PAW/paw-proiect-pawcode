import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugareUtilizatoriComponent } from './adaugare-utilizatori.component';

describe('AdaugareUtilizatoriComponent', () => {
  let component: AdaugareUtilizatoriComponent;
  let fixture: ComponentFixture<AdaugareUtilizatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugareUtilizatoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugareUtilizatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
