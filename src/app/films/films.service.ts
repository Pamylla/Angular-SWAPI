import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  
  getFilms(): Promise<any[]> {
    console.debug('foi');
    return Promise.resolve([ 
      {id: 1, name: 'A New Hope'},
      {id: 2, name: 'Return of Jedi Cabuloso'}
    ])
  }

  async getFilm(id: number): Promise<any>{
    let films = await this.getFilms()
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
