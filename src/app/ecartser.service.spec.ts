import { TestBed } from '@angular/core/testing';

import { EcartserService } from './ecartser.service';

describe('EcartserService', () => {
  let service: EcartserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcartserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
