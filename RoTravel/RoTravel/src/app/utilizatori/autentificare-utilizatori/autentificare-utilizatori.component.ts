import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {UtilizatoriService} from '../utilizatori.service'
import {User} from '../models'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-autentificare-utilizatori',
  templateUrl: './autentificare-utilizatori.component.html',
  styleUrls: ['./autentificare-utilizatori.component.css']
})
export class AutentificareUtilizatoriComponent implements OnInit {
  user =new User()

  constructor(private _service:UtilizatoriService,private _route:Router) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){

  this._service.loginUserFromRemote(this.user).subscribe(
  
    data=>{console.log(data); 

      if(data!=null){
        this._route.navigate(['/oferte'])
      }
  
  },
  error=>{
    console.log("exception occured")
  }

  )

}

}
