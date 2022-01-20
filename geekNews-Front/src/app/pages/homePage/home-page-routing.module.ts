import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page.component";
// import { ActivitiesComponent } from "./activities/activities.component";
// import { MembersComponent } from "./members/members.component";
// import { ListsComponent } from "./lists/lists.component";

const homeRoutes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        children: [
            // { path: "Atividades", component: ActivitiesComponent },
            // { path: "Listas", component: ListsComponent },
            // { path: "Membros", component: MembersComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
