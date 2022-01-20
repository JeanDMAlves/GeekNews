import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  public homeTabs = [
    {
        label: "Listas",
        link: "Listas",
    },
    {
        label: "Histórico",
        link: "Histórico",
    },
    {
        label: "Atividades",
        link: "Atividades",
    },
    {
        label: "Membros",
        link: "Membros",
    },
    {
        label: "Sair",
        link:"Sair"
    }
];
}
