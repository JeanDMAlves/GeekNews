import { Component } from '@angular/core';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent{
  public filtro_selecionado: string = ''
  public lista_filtros: Array<string> = ['Todas','Quadrinhos', 'Games', 'Séries', 'Filmes' ]

  public setSelectedFilter(filtro: string): void {
    this.filtro_selecionado = filtro
  }
}
