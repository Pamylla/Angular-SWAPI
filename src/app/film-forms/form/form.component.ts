import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FilmFormsService } from '../film-forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  
  filmsForms: any = {};
  subscription: Subscription;

  constructor(

    private route: ActivatedRoute,
    //private router: Router,
    private filmFormsService : FilmFormsService

  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.filmsForms = this.filmFormsService.getFilmForm(id);

        if (this.filmsForms === null){
          this.filmsForms = {};
        }
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}