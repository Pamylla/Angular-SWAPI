import { DataService } from './data.service';
import { Movie } from './movie.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies$: Movie[];

  constructor(private http: HttpClient, private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getMovies()
      .subscribe(data => this.movies$ = data);
  }

}
