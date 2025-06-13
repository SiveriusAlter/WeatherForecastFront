import { TestBed } from '@angular/core/testing';

import { Authorisation } from './authorisation';

describe('Authorisation', () => {
  let service: Authorisation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authorisation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
