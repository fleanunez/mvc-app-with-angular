import { TestBed, inject } from '@angular/core/testing';

import { LoaderNotifierService } from './loader-notifier.service';

describe('LoaderNotifierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderNotifierService]
    });
  });

  it('should be created', inject([LoaderNotifierService], (service: LoaderNotifierService) => {
    expect(service).toBeTruthy();
  }));
});
