import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdaugaOfertaComponent } from './adauga-oferta/adauga-oferta.component';
import {GestionareOferteComponent} from './gestionare-oferte/gestionare-oferte.component';
import { VizualizareOferteComponent } from './vizualizare-oferte/vizualizare-oferte.component';



const routes: Routes = [
  {
    path:'gestionare',
    component:GestionareOferteComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:VizualizareOferteComponent,
    pathMatch:'full'
  },
  {
    path:'adauga',
    component:AdaugaOfertaComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)] ,
  exports: [RouterModule]
})
export class OferteRoutingModule { }
