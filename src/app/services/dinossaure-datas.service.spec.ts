import { TestBed } from '@angular/core/testing';

import { DinossaureDatasService } from './dinossaure-datas.service';

describe('DinossaureDatasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinossaureDatasService = TestBed.get(DinossaureDatasService);
    expect(service).toBeTruthy();
  });
});
