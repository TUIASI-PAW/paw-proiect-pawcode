import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdaugareUtilizatoriComponent } from './adaugare-utilizatori/adaugare-utilizatori.component';
import { AutentificareUtilizatoriComponent } from './autentificare-utilizatori/autentificare-utilizatori.component';
import { GestionareUtlilizatoriComponent } from './gestionare-utlilizatori/gestionare-utlilizatori.component';


const routes: Route[] = [
  //localhost:4200/utilizatori/gestionare
  {path: 'gestionare', component: GestionareUtlilizatoriComponent},
  //localhost:4200/utilizatori/new
  {path: 'new', component: AdaugareUtilizatoriComponent},
  //localhost:4200/utilizatori
  {path: '', component: AutentificareUtilizatoriComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilizatoriRoutingModule { }
