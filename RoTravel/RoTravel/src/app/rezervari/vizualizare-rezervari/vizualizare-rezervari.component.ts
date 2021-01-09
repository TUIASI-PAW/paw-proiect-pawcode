import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Rezervari } from '../models/rezervari.model';
import { RezervariService } from '../rezervari.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {User} from 'src/app/utilizatori/models';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vizualizare-rezervari',
  templateUrl: './vizualizare-rezervari.component.html',
  styleUrls: ['./vizualizare-rezervari.component.css']
})

export class VizualizareRezervariComponent implements OnInit {
  rezervari:ArrayBuffer[];
  rezervare:Rezervari;
  user =new User()
  constructor(private httpService: HttpClient,private token:TokenStorageService, private rezService: RezervariService, private _authService:AuthService,private _route:Router) { }
  
  ngOnInit(): void {
    
    this.rezService.getBooking(this.token.getUser()).subscribe(
      rezervare =>{
        this.rezervari = rezervare;
      },
    )
  }

  onClickAnulare(numeRezervare:string, pretRezervare:number, imagineRezervare:string):void{
    this.user = this.token.getUser();
    this.rezervare = new Rezervari;
    this.rezervare.nume = numeRezervare;
    this.rezervare.pret = pretRezervare;
    this.rezervare.imagine = imagineRezervare;
    this.rezervare.email = this.token.getUser().email;
    this.rezService.cancelReservation(this.rezervare).subscribe(
      rezervare =>{
        console.log(rezervare)
        this._route.navigate(['/rezervari']);
        window.location.reload();
      }
    )
  }
}
