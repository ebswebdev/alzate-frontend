import { TestBed } from '@angular/core/testing';

import { ProcesosrService } from './procesosr.service';

describe('ProcesosrService', () => {
  let service: ProcesosrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcesosrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
