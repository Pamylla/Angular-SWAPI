import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmNotFindComponent } from './film-not-find.component';

describe('FilmNotFindComponent', () => {
  let component: FilmNotFindComponent;
  let fixture: ComponentFixture<FilmNotFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmNotFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmNotFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
