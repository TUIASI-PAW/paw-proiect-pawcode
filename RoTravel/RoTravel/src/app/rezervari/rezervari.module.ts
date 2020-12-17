import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RezervariRoutingModule } from './rezervari-routing.module';
import { VizualizareRezervariComponent } from './vizualizare-rezervari/vizualizare-rezervari.component';


@NgModule({
  declarations: [VizualizareRezervariComponent],
  imports: [
    CommonModule,
    RezervariRoutingModule
  ]
})
export class RezervariModule { }
