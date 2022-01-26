import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './homePage/home-page.module';
import { LoginModule } from './login/login.module';
import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { RouterModule } from "@angular/router";
import { RecoverPasswordComponent } from './recoverPassword/recover-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
      PagesRoutingModule,
      ThemeModule,
      RouterModule,
      LoginModule,
      HomePageModule,
      HttpClientModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      ReactiveFormsModule
    ],
    declarations: [PagesComponent, RecoverPasswordComponent],
    providers: [],
})
export class PagesModule {}
