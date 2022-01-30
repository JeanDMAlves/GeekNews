import { SairComponent } from './sair/sair.component';
import { ContatoComponent } from './contato/contato.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page.component";

const homeRoutes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        children: [
            { path: "Sobre", component: SobreComponent },
            { path: "Notícias", component: NoticiasComponent },
            { path: "Contato", component: ContatoComponent },
            { path: "Sair", component: SairComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
