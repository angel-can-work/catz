import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CatsService } from './cats.service';

xdescribe('CatsService', () => {
  let service: CatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
