import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuardService implements CanActivateChild {
    constructor(private localStorage: LocalStorageService, private router: Router) {}

    /**
     * Verifica se as rotas poderão ser acessadas
     * @returns true se puder acessar e false caso contrário
     */
    public canActivateChild(): boolean {
        const token = this.localStorage.readToken();
        if (token) {
            return true;
        } else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}
