import { TestBed } from '@angular/core/testing';

import { TeamaddService } from './teamadd.service';

describe('TeamaddService', () => {
  let service: TeamaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
