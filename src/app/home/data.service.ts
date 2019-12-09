import { Movie } from './movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

apiUrl = 'https://swapi.co/api/films/'

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get<Movie[]>(this.apiUrl);
  }

}
