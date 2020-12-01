import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autentificare-utilizatori',
  templateUrl: './autentificare-utilizatori.component.html',
  styleUrls: ['./autentificare-utilizatori.component.css']
})
export class AutentificareUtilizatoriComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm){
  console.log(form.value)
  form.reset

}

}
