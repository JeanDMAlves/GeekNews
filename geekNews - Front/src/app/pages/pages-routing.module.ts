import { NgModule, NgModuleFactory, Type } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../@core/services/auth-guard.service";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
    {
        path: "",
        component: PagesComponent,
        canActivateChild: [AuthGuardService],
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
