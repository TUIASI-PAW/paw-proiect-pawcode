import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'oferte',
    redirectTo:'oferte',
    pathMatch:'full'
  },
  {
    path:'oferte',
    loadChildren:() => import('./oferte/oferte.module').then(mod => mod.OferteModule)
  },
  {
    path:'utilizatori',
    redirectTo:'utilizatori',
    pathMatch:'full'
  },
  {
    path:'utilizatori',
    loadChildren:() => import('./utilizatori/utilizatori.module').then(mod => mod.UtilizatoriModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
