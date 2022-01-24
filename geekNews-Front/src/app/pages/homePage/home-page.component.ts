import { Component } from "@angular/core";

@Component({
    selector: "app-home-page",
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
    public homeTabs = [
        {
            label: "Sobre",
            link: "Sobre",
        },
        {
            label: "Notícias",
            link: "Notícias",
        },
        {
            label: "Contato",
            link: "Contato",
        },
        {
            label: "Sair",
            link: "Sair",
        },
    ];
}
