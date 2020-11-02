import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugaOfertaComponent } from './adauga-oferta.component';

describe('AdaugaOfertaComponent', () => {
  let component: AdaugaOfertaComponent;
  let fixture: ComponentFixture<AdaugaOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugaOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
