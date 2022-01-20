import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginBoxComponent } from "./login-box/login-box.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { RouterModule } from "@angular/router";
@NgModule({
    declarations: [LoginScreenComponent, LoginBoxComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        RouterModule,
    ],
})
export class LoginModule {}
