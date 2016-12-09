import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Offer } from '../models/offer';

@Injectable()
export class NewsfetchService {d
  private API_PATH: string ='/mainnews';

  constructor(private http: Http) {}

  searchNews(): Observable<Offer[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json());
  }

  retrieveOffer(volumeId: string): Observable<Offer> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }

   retrieveNews(url: string): Observable<Offer> {
   	 let headers = new Headers();
   	  this.createAccess(headers);

    return this.http.get(url, {
      headers: headers
    })
      .map(res => res.json());
  }

  searchOffers(queryTitle: string): Observable<Offer[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items || []);
  }


   createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

   createAccess(headers: Headers) {
    headers.append('Access-Control-Allow-Origin', 'http '); 
  }
}
