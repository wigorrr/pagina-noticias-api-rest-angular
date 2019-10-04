import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2'
  constructor (private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(this.url);
  }

}
