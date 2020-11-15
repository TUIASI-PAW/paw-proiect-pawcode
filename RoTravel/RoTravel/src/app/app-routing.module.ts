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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
