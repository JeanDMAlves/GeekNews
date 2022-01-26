import { NewsService } from './../../../@core/services/news.service';
import { INews } from './../../../@theme/interfaces/INews';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit{
  public filtro_selecionado: string = 'Todas'
  public lista_filtros: Array<string> = ['Todas','Quadrinhos', 'Games', 'Séries', 'Filmes' ]
  public lista_mostrada: INews[] = []

  constructor(private newsService: NewsService){}

  public setSelectedFilter(filtro: string): void {
    this.filtro_selecionado = filtro
    this.lista_mostrada = this.newsService.getNews(filtro)
  }

  public ngOnInit(){
    this.lista_mostrada = this.newsService.getNews('Todas')
  }
}
