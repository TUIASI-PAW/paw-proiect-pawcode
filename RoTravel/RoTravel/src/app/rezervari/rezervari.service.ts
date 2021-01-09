import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/utilizatori/models'
import { Observable } from 'rxjs/internal/Observable';
import { Rezervari } from 'src/app/rezervari/models/rezervari.model';
@Injectable({
  providedIn: 'root'
})
export class RezervariService {

  constructor(private httpClient: HttpClient) { }
  getBooking(user:User):Observable<any>{
    return this.httpClient.get<any>("http://localhost:8080/api/utilizatori/rezervari/"+user.email)
  }

  cancelReservation(booking:Rezervari):Observable<any>{
    return this.httpClient.put("http://localhost:8080/api/utilizatori/rezervari/", booking)
  }
}
