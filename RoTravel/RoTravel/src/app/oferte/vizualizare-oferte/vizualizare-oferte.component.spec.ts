import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizareOferteComponent } from './vizualizare-oferte.component';

describe('VizualizareOferteComponent', () => {
  let component: VizualizareOferteComponent;
  let fixture: ComponentFixture<VizualizareOferteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizareOferteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizareOferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
