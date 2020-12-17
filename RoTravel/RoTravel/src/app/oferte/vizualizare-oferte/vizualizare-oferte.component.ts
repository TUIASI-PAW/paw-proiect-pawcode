import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UtilizatoriModule } from 'src/app/utilizatori/utilizatori.module';
import { UtilizatoriService } from 'src/app/utilizatori/utilizatori.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vizualizare-oferte',
  templateUrl: './vizualizare-oferte.component.html',
  styleUrls: ['./vizualizare-oferte.component.css']
})
export class VizualizareOferteComponent implements OnInit {

  locatii:string [];
  oferte: string[];
  oferta: string;
  numeLocatie:string;
  numeOfertaSelectata:string;
  urlOferte:string;
  destinatieSelectata:boolean;
  locatieSelectata:boolean;
  ofertaSelectata:boolean;
  isAuthenticated:boolean;
  private role:string;
  constructor(private httpService: HttpClient, private token:TokenStorageService, private _route:Router) { 
  
  }
 
  ngOnInit(): void {
    this.destinatieSelectata = true;
    this.ofertaSelectata = false;
    this.locatieSelectata = false;
    this.httpService.get('./assets/destinatii.json').subscribe(
      locatie =>{
        this.locatii = locatie as string [];
      },
    )
    
  }
  
  onClickDestination(numeLocatie:string):void{

    this.locatieSelectata = true;
    this.destinatieSelectata = false;
    this.numeLocatie = numeLocatie.split(" ").join("");
    console.log(this.numeLocatie);
    this.urlOferte = './assets/'+this.numeLocatie+'.json';
    this.httpService.get(this.urlOferte).subscribe(
      oferta =>{
        this.oferte = oferta as string [];
        console.log(oferta);
      },
    )
  }

  onClickOfert(numeofertaSelectata:string):void{
    this.ofertaSelectata = true;
    this.locatieSelectata = false;
    this.numeOfertaSelectata = numeofertaSelectata;
    console.log(this.numeOfertaSelectata);
    this.isAuthenticated = !!this.token.getToken();
    if(this.isAuthenticated)
    {
      const user = this.token.getUser();
      this.role = user.tipCont;

      
    }
    console.log(this.isAuthenticated);
    
    //trebuie citit din json doar oferta selectata din html.
  this.httpService.get(this.urlOferte).subscribe(
    oferta1 =>{
      this.oferta = this.oferte.find(item => item['numeOferta']==numeofertaSelectata) as string;
      console.log(this.oferta);
    },
  )
  }

}
