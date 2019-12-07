import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFormsComponent } from './film-forms.component';

describe('FilmFormsComponent', () => {
  let component: FilmFormsComponent;
  let fixture: ComponentFixture<FilmFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
