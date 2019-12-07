import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmFormsComponent } from './film-forms.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { FilmFormsRoutingModule } from './film-forms.routing.module';

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
    providers: [],
})
export class FilmFormsModule {}