import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import {AuthService} from '../../_services/auth.service';
import { Oferta } from '../models';

@Component({
  selector: 'app-adauga-oferta',
  templateUrl: './adauga-oferta.component.html',
  styleUrls: ['./adauga-oferta.component.css']
})
export class AdaugaOfertaComponent implements OnInit {
  form:any={}
  oferta = new Oferta();
  selectedFile: File;
  retrievedImage: any;



  constructor(private _authService:AuthService,private token:TokenStorageService, private _route:Router) { 
  }


  onSubmit(form:NgForm){
    this._authService.AdaugaOferta(this.oferta).subscribe(
      data=>{
        console.log(this.oferta);
        this._route.navigate(['/'])
      }
      );
    }
    public onFileChanged(event) {
          this.selectedFile = event.target.files[0];
        }
      
      
  ngOnInit(): void {
    this.oferta.locatie="";
    this.oferta.descriere="";
    this.oferta.imagine="";
    this.oferta.numeOferta="";
    this.oferta.pret="";
    this.oferta.proprietar=this.token.getUser().email;
  }

}
