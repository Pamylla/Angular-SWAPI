import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ConsoleReporter } from 'jasmine';
import { Subscription, from } from 'rxjs'; 
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})

export class FilmDetailComponent implements OnInit {
  
  id: number;
  subscription : Subscription;
  film: any;

  constructor(
    private route: ActivatedRoute, 
    private filmsService: FilmsService, 
    private router: Router)
    {
      //
    }

  ngOnInit() {
    //HOW ID SEARCH
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        //GET FILM BY ID
        this.film = this.filmsService.getFilm(params['id']);

        //NOT FOUND FILM
        if (this.film == null){
          this.router.navigate(['/notFound'])
        }

      });
  }

ngOnDestroy() {
  //CHANGE FILM BY ID
  this.subscription.unsubscribe();
}
}