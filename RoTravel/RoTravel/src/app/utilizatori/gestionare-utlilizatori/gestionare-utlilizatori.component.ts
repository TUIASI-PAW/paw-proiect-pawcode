import { Component, OnInit } from '@angular/core';
import { UtilizatoriService } from '../utilizatori.service';
import {TokenStorageService} from '../../_services/token-storage.service';
import {HttpClient} from '@angular/common/http';
import { User } from '../models';

@Component({
  selector: 'app-gestionare-utlilizatori',
  templateUrl: './gestionare-utlilizatori.component.html',
  styleUrls: ['./gestionare-utlilizatori.component.css']
})
export class GestionareUtlilizatoriComponent implements OnInit {
  utilizatori : User[];

  constructor(private httpService: HttpClient,private token:TokenStorageService, private users: UtilizatoriService) { }

  ngOnInit(): void {
    this.users.getUsers(this.token.getUser()).subscribe(
      user =>{
        this.utilizatori = user;
      },
    )
  }

}
