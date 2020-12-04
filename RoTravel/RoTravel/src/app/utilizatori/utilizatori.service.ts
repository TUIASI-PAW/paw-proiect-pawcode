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

    get(): Observable<User[]>{
        return this.httpClient.get<User[]>(this.url);
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
        return this.httpClient.post<any>("http://localhost:8080/api/utilizatori", user)
    }

    public setAuthenticated(val:boolean){
        this.authenticated = val;
    }

    public getAuthenticated():boolean{
        return this.authenticated;
    }
}