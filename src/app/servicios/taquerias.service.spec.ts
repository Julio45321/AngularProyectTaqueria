import { TestBed } from '@angular/core/testing';

import { TaqueriasService } from './taquerias.service';

describe('TaqueriasService', () => {
  let service: TaqueriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaqueriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
