import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-vizualizare-rezervari',
  templateUrl: './vizualizare-rezervari.component.html',
  styleUrls: ['./vizualizare-rezervari.component.css']
})
export class VizualizareRezervariComponent implements OnInit {
  
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    
  }

}
