import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilizatoriService } from '../utilizatori.service';
import {User} from '../models'

@Component({
  selector: 'app-adaugare-utilizatori',
  templateUrl: './adaugare-utilizatori.component.html',
  styleUrls: ['./adaugare-utilizatori.component.css']
})
export class AdaugareUtilizatoriComponent implements OnInit {
  user = new User()
  constructor(private _service:UtilizatoriService, private _route:Router) { 
  }

  onSubmit(form:NgForm){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{console.log(data);
      
        if(data!=null)
        {
          this._route.navigate(["/utilizatori"])
        }
      })
    }
  
  ngOnInit(): void {
  }

}
