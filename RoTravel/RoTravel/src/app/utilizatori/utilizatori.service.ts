import {Component, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {User} from './models';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UtilizatoriService{
    //localhost:4200/api/utilizatori
    private url: string = `${environment.apiUrl}utilizatori`;
    private authenticated = false;
    constructor(private httpClient: HttpClient){}

    public getUsers(user: User): Observable<User[]>{
        return this.httpClient.get<User[]>("http://localhost:8080/api/utilizatori");
    }

    save(utilizatori: User): Observable<any>{
        return this.httpClient.post(this.url, utilizatori);
    }
    
    delete(id:number):Observable<any>
    {
        return this.httpClient.delete('${this.url}/${id}');
    }

    public loginUserFromRemote(user:User):Observable<any>{

       return this.httpClient.post<any>("http://localhost:8080/api/utilizatori/login",user)
    }

    public registerUserFromRemote(user:User):Observable<any>{
        return this.httpClient.post<any>("http://localhost:8080/api/utilizatori/signup", user)
    }
    
    public setAuthenticated(val:boolean){
        this.authenticated = val;
    }

    public getAuthenticated():boolean{
        return this.authenticated;
    }
}