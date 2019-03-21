import { TestBed } from '@angular/core/testing';

import { RequestlineService } from './requestline.service';

describe('RequestlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestlineService = TestBed.get(RequestlineService);
    expect(service).toBeTruthy();
  });
});
