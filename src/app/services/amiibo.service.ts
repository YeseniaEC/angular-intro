import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // only brings in the necessary definitions
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Amiibo } from '../interfaces/amiibo';

@Injectable({
  providedIn: 'root'
})
export class AmiiboService {
  private apiUrl = 'http://www.amiiboapi.com/api/';

  public key = environment.secret_key; // this line calls in to the environments folder your secret key
  public apiKey = environment.apiKey_; //

  constructor(private http: HttpClient ) { } // placing inside the constructor() injects the client into the services

  // myFunction () {
  //   console.log('hello world');
  // }

  getAmiibos(): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>(`${this.apiUrl}amiibo`);
  }
  getAmiibo(tail: string): Observable<Amiibo> {
    return this.http.get<Amiibo>(`${this.apiUrl}amiibo/?tail=${tail}`);
    // important for all apis and to filter information (? passes data in and is like a request, send data to server without sending it over url) vs a POST request which can be manipulated and hacked //
  }
  getFilteredAmiibos(category: string, value: string): Observable<Amiibo[]> {
    return this.http.get<Amiibo[]>(`${this.apiUrl}amiibo/?${category}=${value}`);
  }
}
