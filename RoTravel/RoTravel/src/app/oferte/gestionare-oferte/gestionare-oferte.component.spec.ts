import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionareOferteComponent } from './gestionare-oferte.component';

describe('GestionareOferteComponent', () => {
  let component: GestionareOferteComponent;
  let fixture: ComponentFixture<GestionareOferteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionareOferteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionareOferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
