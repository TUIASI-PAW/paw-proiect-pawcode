import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { OferteRoutingModule } from './oferte-routing.module';
import { AdaugaOfertaComponent } from './adauga-oferta/adauga-oferta.component';
import { GestionareOferteComponent } from './gestionare-oferte/gestionare-oferte.component';
import { VizualizareOferteComponent } from './vizualizare-oferte/vizualizare-oferte.component';


@NgModule({
  declarations: [AdaugaOfertaComponent, GestionareOferteComponent, VizualizareOferteComponent],
  imports: [
    CommonModule,
    OferteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
  
})
export class OferteModule { }
