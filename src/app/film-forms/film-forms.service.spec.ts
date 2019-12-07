import { TestBed } from '@angular/core/testing';

import { FilmFormsService } from './film-forms.service';

describe('FilmFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmFormsService = TestBed.get(FilmFormsService);
    expect(service).toBeTruthy();
  });
});
