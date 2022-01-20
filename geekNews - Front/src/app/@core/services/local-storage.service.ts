import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class LocalStorageService {
    private storage: Storage;
    private key: string = "TokenLogin";
    constructor() {
        this.storage = window.localStorage;
    }

    /**
     * Adiciona o token de login no localStorage com a chave 'TokenLogin'
     * @param token - Token retornado pelo servidor após a validação de login
     */
    public createToken(token: string): void {
        if (this.storage) {
            this.storage.setItem(this.key, token);
        }
    }

    /**
     * Deleta o TokenLogin do localStorage
     */
    public deleteToken(): void {
        if (this.storage) {
            return this.storage.removeItem(this.key);
        }
    }

    /**
     * Lê o valor atribuído a chave 'TokenLogin' e o retorna
     * @returns Retorna o token de login do localStorage
     */
    public readToken(): string {
        if (this.storage) {
            return this.storage.getItem(this.key);
        }
    }
}
