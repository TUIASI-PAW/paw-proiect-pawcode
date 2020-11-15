import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GestionareOferteComponent} from './gestionare-oferte/gestionare-oferte.component';


const routes: Routes = [
  {
    path:'',
    component:GestionareOferteComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OferteRoutingModule { }
