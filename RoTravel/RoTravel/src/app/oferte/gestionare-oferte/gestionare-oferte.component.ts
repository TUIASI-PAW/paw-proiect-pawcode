import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs'
import {OferteService} from '../oferte.service'
import {Oferta} from '../models'


@Component({
  selector: 'app-gestionare-oferte',
  templateUrl: './gestionare-oferte.component.html',
  styleUrls: ['./gestionare-oferte.component.css']
})


export class GestionareOferteComponent implements OnInit,OnDestroy {

  private subscription:Subscription;
  oferte:Oferta[];

  constructor(private oferteService:OferteService) { }

  ngOnInit(): void {
    this.getOferte();
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  private getOferte(){
    this.subscription = this.oferteService.get().subscribe((oferte:Oferta[])=>{
      this.oferte = oferte;
    })

  }

}
