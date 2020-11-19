import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OferteRoutingModule { }
