import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizareRezervariComponent } from './vizualizare-rezervari.component';

describe('VizualizareRezervariComponent', () => {
  let component: VizualizareRezervariComponent;
  let fixture: ComponentFixture<VizualizareRezervariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizareRezervariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizareRezervariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
