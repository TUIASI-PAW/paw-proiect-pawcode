import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private role:string;
  isAuthenticated = false;
  title = 'RoTravel';

  constructor(private token:TokenStorageService){}

  ngOnInit():void{

    this.isAuthenticated = !!this.token.getToken();
    if(this.isAuthenticated)
    {
      const user = this.token.getUser();
      this.role = user.tipCont;

      
    }
  }
}
