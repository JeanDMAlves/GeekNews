import { LocalStorageService } from "./../../../@core/services/local-storage.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-login-screen",
    templateUrl: "./login-screen.component.html",
    styleUrls: ["./login-screen.component.css"],
})
export class LoginScreenComponent implements OnInit {
    constructor(private localStorage: LocalStorageService, private router: Router) {}

    /**
     * Verifica se o Token de Login existe no LocalStorage
     * Se existir, redireciona para a página Home
     */
    public ngOnInit(): void {
        if (this.localStorage.readToken()) {
            this.router.navigate(["pages/home/"]);
        }
    }
}
