import { NgModule, NgModuleFactory, Type } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginScreenComponent } from "./pages/login/login-screen/login-screen.component";

const routes: Routes = [
    {
        path: "pages",
        loadChildren: (): Promise<NgModuleFactory<any> | Type<any> | any> => import("./pages/pages.module").then((module) => module.PagesModule),
    },
    {
        path: "login",
        component: LoginScreenComponent,
    },
    { path: "**", redirectTo: "login" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
