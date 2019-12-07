import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  
  getFilms(){
    return[ 
      {id: 1, name: 'Return of Jedi'},
      {id: 2, name: 'Return of Jedi Cabuloso'}
    ]
  }

  getFilm(id: number){
    let films = this.getFilms()
    for (let i = 0; i < films.length; i++) {
      let film = films[i];
      if (film.id == id){
        return film;
      }     
    } 
    return null;
  }

  constructor() { }
}
