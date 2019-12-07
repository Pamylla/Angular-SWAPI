import { Component, OnInit } from '@angular/core';
import { FilmFormsService } from './film-forms.service';

@Component({
  selector: 'app-film-forms',
  templateUrl: './film-forms.component.html',
  styleUrls: ['./film-forms.component.scss']
})
export class FilmFormsComponent implements OnInit {

 private filmsForms : any [] = [];

  constructor(private filmFormService: FilmFormsService ) { }

  ngOnInit() {
    this.filmsForms = this.filmFormService.getFilmsForm();
  }

}
