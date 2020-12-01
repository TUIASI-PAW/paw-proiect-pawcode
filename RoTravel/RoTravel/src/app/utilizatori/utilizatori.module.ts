import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { UtilizatoriRoutingModule } from './utilizatori-routing.module';
import { AdaugareUtilizatoriComponent } from './adaugare-utilizatori/adaugare-utilizatori.component';
import { GestionareUtlilizatoriComponent } from './gestionare-utlilizatori/gestionare-utlilizatori.component';
import { AutentificareUtilizatoriComponent } from './autentificare-utilizatori/autentificare-utilizatori.component';


@NgModule({
  declarations: [AdaugareUtilizatoriComponent, GestionareUtlilizatoriComponent,AutentificareUtilizatoriComponent],
  imports: [
    CommonModule,
    UtilizatoriRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UtilizatoriModule { }
