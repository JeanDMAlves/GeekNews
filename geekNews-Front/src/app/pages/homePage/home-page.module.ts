import { MatButtonModule } from "@angular/material/button";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NavigationHeaderComponent } from "./navigation-header/navigation-header.component";
import { HomePageComponent } from "./home-page.component";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { ThemeModule } from "src/app/@theme/theme.module";
import { RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { SobreComponent } from './sobre/sobre.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContatoComponent } from './contato/contato.component';
import { SairComponent } from './sair/sair.component';
import { FilterNewsComponent } from './noticias/filter-news/filter-news.component';
import { OrderListModule } from 'primeng/orderlist';
import { CardNewsComponent } from './noticias/card-news/card-news.component';

@NgModule({
    declarations: [
        NavigationHeaderComponent,
        HomePageComponent,
        HomePageComponent,
        SobreComponent,
        NoticiasComponent,
        ContatoComponent,
        SairComponent,
        FilterNewsComponent,
        CardNewsComponent,
    ],
    imports: [
        MatNativeDateModule,
        MatDatepickerModule,
        NgbModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        HomePageRoutingModule,
        ThemeModule,
        RouterModule,
        MatTabsModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        OrderListModule,
    ],
})
export class HomePageModule {}
