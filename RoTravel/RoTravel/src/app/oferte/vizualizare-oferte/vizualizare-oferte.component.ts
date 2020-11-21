import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vizualizare-oferte',
  templateUrl: './vizualizare-oferte.component.html',
  styleUrls: ['./vizualizare-oferte.component.css']
})
export class VizualizareOferteComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  locatii:string [];
  oferte: string[];
  numeLocatie:string;
  numeOfertaSelectata:string;
  urlOferte:string;
  destinatieSelectata:boolean;
  ofertaSelectata:boolean;

  ngOnInit(): void {
    this.destinatieSelectata = false;
    this.ofertaSelectata = false;
    this.httpService.get('./assets/destinatii.json').subscribe(
      locatie =>{
        this.locatii = locatie as string [];
      },
    )
    
  }
  
  onClickDestination(numeLocatie:string):void{

    this.destinatieSelectata = true;
    this.numeLocatie = numeLocatie.split(" ").join("");
    console.log(this.numeLocatie);
    this.urlOferte = './assets/'+this.numeLocatie+'.json';
    this.httpService.get(this.urlOferte).subscribe(
      oferta =>{
        this.oferte = oferta as string [];
      },
    )
  }

  onClickOfert(numeofertaSelectata:string,numeLocatie:string):void{
    this.ofertaSelectata = true;
    this.numeLocatie = numeLocatie.split(" ").join("");
    this.urlOferte= './assets/'+this.numeLocatie+'.json';
    //trebuie citit din json doar oferta selectata din html.
  }
 
}
