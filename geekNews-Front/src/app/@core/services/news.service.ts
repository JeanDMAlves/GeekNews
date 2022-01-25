import { INews } from './../../@theme/interfaces/INews';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews(filtro: string): INews[] {
    const noticias = environment.news
    if(filtro == 'Todas'){
      return noticias
    }
    else{
      return noticias.filter(noticia => {return noticia.label == filtro})
    }
  }

}
