import { Component, OnInit } from '@angular/core';
import { UtilizatoriService } from '../utilizatori.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';
import { User } from '../models';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-gestionare-utlilizatori',
  templateUrl: './gestionare-utlilizatori.component.html',
  styleUrls: ['./gestionare-utlilizatori.component.css']
})
export class GestionareUtlilizatoriComponent implements OnInit {
  utilizatori : User[];

  constructor(private httpService: HttpClient,private token:TokenStorageService, private users: UtilizatoriService, private _route:Router,private _authService:AuthService) { }

  ngOnInit(): void {
    this.users.getUsers(this.token.getUser()).subscribe(
      user =>{
        this.utilizatori = user;
      },
    )
  }
  onClickStergere(firstName:string, lastName:string, email:string, cont:string, id:number, password:string, cnp:string, telefon:string, rezervari:[]):void{
    
    var user = new User();
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.tipCont=cont;
    user.id = id;
    user.password = password;
    user.cnp = cnp;
    user.telefon = telefon;
    user.rezervari = rezervari;
    this._authService.delete(user).subscribe(
      data=>{
        this._route.navigate(['/home'])
      }
      );   
  }

}
