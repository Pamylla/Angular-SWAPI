import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FilmsService } from './films.service';
import { FilmNotFindComponent } from './film-not-find/film-not-find.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films.component';

@NgModule({
    declarations: [
        FilmsComponent,
        FilmDetailComponent,
        FilmNotFindComponent
    ],
    imports: [ CommonModule ],
    exports: [],
    providers: [FilmsService],
})

export class FilmsModule {}