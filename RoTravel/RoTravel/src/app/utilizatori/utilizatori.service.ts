import {Component, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Utilizatori} from './models';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UtilizatoriService{
    //localhost:4200/api/utilizatori
    private url: string = `${environment.apiUrl}utilizatori`;

    constructor(private httpClient: HttpClient){}

    get(): Observable<Utilizatori[]>{
        return this.httpClient.get<Utilizatori[]>(this.url);
    }

    save(utilizatori: Utilizatori): Observable<any>{
        return this.httpClient.post(this.url, utilizatori);
    }
    
    delete(id:number):Observable<any>
    {
        return this.httpClient.delete('${this.url}/${id}');
    }
}