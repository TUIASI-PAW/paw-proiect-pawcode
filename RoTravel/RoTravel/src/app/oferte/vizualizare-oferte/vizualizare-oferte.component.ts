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

  ngOnInit(): void {
    this.httpService.get('./assets/destinatii.json').subscribe(
      locatie =>{
        this.locatii = locatie as string [];
      },
    )
  }

}
