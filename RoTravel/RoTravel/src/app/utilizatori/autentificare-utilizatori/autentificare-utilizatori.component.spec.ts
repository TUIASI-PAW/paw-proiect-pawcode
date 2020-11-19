import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificareUtilizatoriComponent } from './autentificare-utilizatori.component';

describe('AutentificareUtilizatoriComponent', () => {
  let component: AutentificareUtilizatoriComponent;
  let fixture: ComponentFixture<AutentificareUtilizatoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificareUtilizatoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutentificareUtilizatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
