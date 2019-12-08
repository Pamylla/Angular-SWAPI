//import { Film } from './film-form';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class FilmFormsService {

  private filmsForms : any [] = [
    { id: 1, name: 'Filme 1', episode: 'Episode 1' },
    { id: 2, name: 'Filme 2', episode: 'Episode 2' },
    { id: 3, name: 'Filme 3', episode: 'Episode 3' }
  ]

  getFilmsForm(){
    return this.filmsForms;
  };

  getFilmForm(id: number){
    for (let i=0; i<this.filmsForms.length; i++){
      let filmForm = this.filmsForms[i];
      if(filmForm.id == id){
        return filmForm;
      }
    }return null;
  }

  constructor() { }
}
