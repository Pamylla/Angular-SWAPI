import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
//import { FilmFormsModule } from './../film-forms.module';
import { Subscription } from 'rxjs';
import { FilmFormsService } from './../film-forms.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  filmsForms: any;
  subscription: Subscription;

  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private filmFormsService : FilmFormsService

  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.filmsForms = this.filmFormsService.getFilmForm(id);
      }
    );

  }

  editarFilme(){
    this.router.navigate(['/film-forms', this.filmsForms.id, 'edit']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
