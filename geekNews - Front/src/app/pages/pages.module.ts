import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [PagesRoutingModule, ThemeModule, RouterModule],
    declarations: [PagesComponent],
    providers: [],
})
export class PagesModule {}
