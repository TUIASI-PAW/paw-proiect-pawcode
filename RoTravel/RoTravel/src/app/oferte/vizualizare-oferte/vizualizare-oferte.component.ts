import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';
import { Router } from '@angular/router';
import { Rezervari } from 'src/app/rezervari/models/rezervari.model';
import {AuthService} from '../../_services/auth.service';
import {User} from 'src/app/utilizatori/models'
import { OferteService } from '../oferte.service';
import { Destinatie, Oferta } from '../models';

@Component({
  selector: 'app-vizualizare-oferte',
  templateUrl: './vizualizare-oferte.component.html',
  styleUrls: ['./vizualizare-oferte.component.css']
})
export class VizualizareOferteComponent implements OnInit {
  user =new User()
  rezervare:Rezervari;
  locatii:Destinatie [];
  oferte: Oferta[];
  oferta: Oferta;
  numeLocatie:string;
  numeOfertaSelectata:string;
  urlOferte:string;
  urlRezervare:string;
  destinatieSelectata:boolean;
  locatieSelectata:boolean;
  ofertaSelectata:boolean;
  isAuthenticated:boolean;
  private role:string;
  constructor(private httpService: HttpClient, private token:TokenStorageService, private _route:Router,private _authService:AuthService, private _oferteService: OferteService) { 
  
  }
 
  
  ngOnInit(): void {
    this.destinatieSelectata = true;
    this.ofertaSelectata = false;
    this.locatieSelectata = false;
    this._oferteService.getDestinatii().subscribe(
      locatie =>{
        this.locatii = locatie;
      },
    )
    
  }
  
  onClickDestination(numeLocatie:string):void{

    this.locatieSelectata = true;
    this.destinatieSelectata = false;
    this.numeLocatie = numeLocatie.split(" ").join("");
    console.log(this.numeLocatie);
    this.urlOferte = './assets/'+this.numeLocatie+'.json';
    this._oferteService.getLocatii(numeLocatie).subscribe(
      oferta =>{
        this.oferte = oferta;
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
    
    
    //trebuie citit din json doar oferta selectata din html.
  this.httpService.get(this.urlOferte).subscribe(
    oferta1 =>{
      this.oferta = this.oferte.find(item => item['numeOferta']==numeofertaSelectata);
      
    },
  )
  }

  onClickRezervare(numeOfertaSelectata:string, pretOfertaSelectata:number, imagineOferta:string):void{
    this.rezervare = new Rezervari;
    
    this.user = this.token.getUser();
    this.rezervare.nume = numeOfertaSelectata;
    this.rezervare.pret = pretOfertaSelectata;
    this.rezervare.imagine = imagineOferta;
    this.rezervare.email = this.user.email
    this._authService.booking(this.rezervare).subscribe(
      data=>{
        console.log(this.rezervare);
        console.log(this.user);
        this._route.navigate(['/rezervari'])
      }
      );   
  }

}
