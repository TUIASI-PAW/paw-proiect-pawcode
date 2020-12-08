import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilizatoriService } from '../utilizatori.service';
import {User} from '../models'
import {AuthService} from '../../_services/auth.service';


@Component({
  selector: 'app-adaugare-utilizatori',
  templateUrl: './adaugare-utilizatori.component.html',
  styleUrls: ['./adaugare-utilizatori.component.css']
})
export class AdaugareUtilizatoriComponent implements OnInit {
  form:any={}
  user=new User();
  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';
  constructor(private _authService:AuthService, private _route:Router) { 
  }


  onSubmit(form:NgForm){
    this._authService.register(this.user).subscribe(
      data=>{console.log(data);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
        this._route.navigate(['/utilizatori'])
      }
      );
    }
  
  ngOnInit(): void {
  }

}
