import { TestBed } from '@angular/core/testing';

import { DataimgService } from './dataimg.service';

describe('DataimgService', () => {
  let service: DataimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
