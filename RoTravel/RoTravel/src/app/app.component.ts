import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private role:string;
  isAuthenticated = false;
  isAdmin = false;
  isProprietar = false;
  title = 'RoTravel';

  constructor(private token:TokenStorageService, private _route:Router){}

  ngOnInit():void{

    this.isAuthenticated = !!this.token.getToken();
    if(this.isAuthenticated)
    {
      const user = this.token.getUser();
      this.role = user.role;
      if(this.role==="admin")
      {
        this.isAdmin=true;
      }
      else
      {
        this.isAdmin = false;
      }

      if(this.role==="proprietar")
      {
        this.isProprietar=true;
      }
      else
      {
        this.isProprietar = false;
      }
    }
  }

  logout():void{
    this.token.signOut();
    this._route.navigate(['/home'])
      .then(()=>{
        window.location.reload();
      });
  }
}
