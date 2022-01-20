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

@NgModule({
    declarations: [
        NavigationHeaderComponent,
        HomePageComponent,
        HomePageComponent,
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
    ],
})
export class HomePageModule {}
