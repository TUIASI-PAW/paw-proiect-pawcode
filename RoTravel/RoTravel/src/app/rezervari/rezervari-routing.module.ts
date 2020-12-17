import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VizualizareRezervariComponent } from './vizualizare-rezervari/vizualizare-rezervari.component';



const routes: Routes = [
  {
    path:'',
    component:VizualizareRezervariComponent,
    pathMatch:'full'
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RezervariRoutingModule { }
