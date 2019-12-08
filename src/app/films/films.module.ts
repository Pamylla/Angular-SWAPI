import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { FilmsService } from './films.service';
//import { LoginComponent } from './../login/login.component';
import { FilmNotFindComponent } from './film-not-find/film-not-find.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films.routing.module';

@NgModule({
    declarations: [
        FilmsComponent,
        FilmDetailComponent,
        FilmNotFindComponent, 
    ],
    imports: [ 
        CommonModule,
        FilmsRoutingModule
        //RouterModule
     ],
    exports: [],
    providers: [
        FilmsService
    ],
})

export class FilmsModule {}