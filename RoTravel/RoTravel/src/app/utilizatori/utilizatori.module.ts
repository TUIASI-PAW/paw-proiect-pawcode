import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilizatoriRoutingModule } from './utilizatori-routing.module';
import { AdaugareUtilizatoriComponent } from './adaugare-utilizatori/adaugare-utilizatori.component';
import { GestionareUtlilizatoriComponent } from './gestionare-utlilizatori/gestionare-utlilizatori.component';


@NgModule({
  declarations: [AdaugareUtilizatoriComponent, GestionareUtlilizatoriComponent],
  imports: [
    CommonModule,
    UtilizatoriRoutingModule
  ]
})
export class UtilizatoriModule { }
