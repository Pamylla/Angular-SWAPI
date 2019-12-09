import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from './films.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: any [];
  page: number;
 
  constructor( private filmsService: FilmsService) { }

  ngOnInit() {
    this.getFilms();
      }

    async getFilms(){
      this.films = await this.filmsService.getFilms();
    }

  }

