import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

//se trimit cereri http catre backend pentru login si signup
const AUTH_API="http://localhost:8080/api/utilizatori/";

const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(credentials):Observable<any>{

    return this.http.post(AUTH_API+'login',{
      email:credentials.email,
      password:credentials.password
    },httpOptions);
  }

  register(user):Observable<any>{
    console.log(user);
    return this.http.post(AUTH_API+'signup',
      user,httpOptions);
  }
}
