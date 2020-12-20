import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Rezervari } from '../models/rezervari.model';
import { RezervariService } from '../rezervari.service';
import {TokenStorageService} from '../../_services/token-storage.service';
@Component({
  selector: 'app-vizualizare-rezervari',
  templateUrl: './vizualizare-rezervari.component.html',
  styleUrls: ['./vizualizare-rezervari.component.css']
})

export class VizualizareRezervariComponent implements OnInit {
  rezervari:ArrayBuffer[];
  
  constructor(private httpService: HttpClient,private token:TokenStorageService, private rezService: RezervariService) { }
  
  ngOnInit(): void {
    
    this.rezService.getBooking(this.token.getUser()).subscribe(
      rezervare =>{
        this.rezervari = rezervare;
      },
    )
  }

}
