import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Oferta} from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OferteService {

  private url = `${environment.apiUrl}oferte`;
  constructor(private httpClient: HttpClient) { }

  get():Observable<Oferta[]>{

    return this.httpClient.get<Oferta[]>(this.url);
  }

  getDestinatii():Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/destinatie")
}
getLocatii(numeLocatie):Observable<any>{
  return this.httpClient.get<any>("http://localhost:8080/api/locatie/"+numeLocatie)
}
}
