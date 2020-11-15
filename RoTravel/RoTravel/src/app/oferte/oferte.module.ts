import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OferteRoutingModule } from './oferte-routing.module';
import { AdaugaOfertaComponent } from './adauga-oferta/adauga-oferta.component';
import { GestionareOferteComponent } from './gestionare-oferte/gestionare-oferte.component';


@NgModule({
  declarations: [AdaugaOfertaComponent, GestionareOferteComponent],
  imports: [
    CommonModule,
    OferteRoutingModule
  ]
})
export class OferteModule { }