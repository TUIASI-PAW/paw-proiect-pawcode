import { TestBed } from '@angular/core/testing';

import { OferteService } from './oferte.service';

describe('OferteService', () => {
  let service: OferteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OferteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
