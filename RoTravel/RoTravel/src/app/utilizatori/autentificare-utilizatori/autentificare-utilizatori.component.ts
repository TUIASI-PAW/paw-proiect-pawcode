import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import {TokenStorageService} from '../../_services/token-storage.service';

import {User} from '../models'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-autentificare-utilizatori',
  templateUrl: './autentificare-utilizatori.component.html',
  styleUrls: ['./autentificare-utilizatori.component.css']
})
export class AutentificareUtilizatoriComponent implements OnInit {
  user =new User()
  role:string;
  isLoggedIn=false;
  isLoginFailed=false;

   constructor(private _service:AuthService,private token:TokenStorageService, private _route:Router) { }
  
  ngOnInit(): void {
    if(this.token.getToken()){
      this.isLoggedIn = true;
      this.role=this.token.getUser().tipCont;
    }
  }
onSubmit(form:NgForm){

  this._service.login(this.user).subscribe(
  
    data=>{console.log(data); 
      this.token.saveToken(data.accessToken);
      this.token.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.role = this.token.getUser().tipCont;
      this._route.navigate(['/oferte'])
      .then(()=>{
        window.location.reload();
      });
  
  },
  error=>{
    this.isLoginFailed = false;
    console.log("error on LogIn");
  }

  );

}

}
