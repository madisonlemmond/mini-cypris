import { TestBed } from '@angular/core/testing';

import { WorksSearchService } from './works-search.service';

describe('WorksSearchService', () => {
  let service: WorksSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
