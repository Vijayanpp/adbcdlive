import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Offer } from '../models/offer';

@Injectable()
export class NewsfetchService {
  private API_PATH: string = 'https://newsapi.org/v1/articles?source=business-insider-uk&sortBy=top&&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e';

  constructor(private http: Http) {}

  searchNews(): Observable<Offer[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json());
  }

  retrieveOffer(volumeId: string): Observable<Offer> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }

  searchOffers(queryTitle: string): Observable<Offer[]> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map(res => res.json().items || []);
  }
}
