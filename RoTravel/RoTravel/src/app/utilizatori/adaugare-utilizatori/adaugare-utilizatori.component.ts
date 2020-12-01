import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilizatoriService } from '../utilizatori.service';

@Component({
  selector: 'app-adaugare-utilizatori',
  templateUrl: './adaugare-utilizatori.component.html',
  styleUrls: ['./adaugare-utilizatori.component.css']
})
export class AdaugareUtilizatoriComponent implements OnInit {
  
  constructor() { 
  }

  onSubmit(form:NgForm){{
    console.log(form.value);
    form.reset();
  }}
  ngOnInit(): void {
  }

}
