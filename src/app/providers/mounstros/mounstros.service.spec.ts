import { TestBed } from '@angular/core/testing';

import { MounstrosService } from './mounstros.service';

describe('MounstrosService', () => {
  let service: MounstrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MounstrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
