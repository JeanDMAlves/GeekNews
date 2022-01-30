import { NgModule, NgModuleFactory, Type } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: "",
        component: PagesComponent,
        children: [
            {
                path: "home",
                loadChildren: (): Promise<NgModuleFactory<any> | Type<any> | any> =>
                    import("./homePage/home-page.module").then((module) => module.HomePageModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
