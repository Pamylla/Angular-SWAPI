import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmFormsComponent } from './film-forms.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { FilmFormsRoutingModule } from './film-forms.routing.module';
import { FilmFormsService } from './film-forms.service';

@NgModule({
    declarations: [
        FilmFormsComponent,
        FormComponent,
        DetailComponent
    ],
    imports: [ 
        CommonModule,
        FilmFormsRoutingModule
     ],
    exports: [],
    providers: [ FilmFormsService],
})
export class FilmFormsModule {}