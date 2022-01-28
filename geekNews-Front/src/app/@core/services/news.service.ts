import { INews } from './../../@theme/interfaces/INews';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url: string = environment.urlUser;
  constructor(private http: HttpClient) {}
  private httpOptions = {
      headers: new HttpHeaders({
          "Content-Type": "application/json",
      }),
  };

  getNews(){
    return this.http.get(this.url + "news", this.httpOptions);
  }
}


