import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionareUtlilizatoriComponent } from './gestionare-utlilizatori.component';

describe('GestionareUtlilizatoriComponent', () => {
  let component: GestionareUtlilizatoriComponent;
  let fixture: ComponentFixture<GestionareUtlilizatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionareUtlilizatoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionareUtlilizatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
