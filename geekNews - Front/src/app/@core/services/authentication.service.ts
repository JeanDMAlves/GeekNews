import { IClient } from "../../@theme/interfaces/IClient";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    private url: string = environment.apiURL;
    constructor(private http: HttpClient) {}
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };

    /**
     * Recebe algum erro no login e exibe esse erro na tela de Login
     * @param error - Resposta de Erro da request http
     * @returns um observável que monitora os erros
     */
    private handleError(error: HttpErrorResponse): Observable<IClient> {
        let errorMessage: string = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMensagem de Erro: ${error.error.error}`;
        }
        return throwError(errorMessage);
    }

    /**
     * Recebe um cliente, faz a requisição post http para verificar
     * se ele existe e retorna a resposta
     * @param client - cliente nos moldes da Interface ICliente
     * @returns um observável que monitora a requisição post
     */
    public validateLogin(client: IClient): Observable<IClient> {
        return this.http.post<IClient>(this.url + "/login", client, this.httpOptions).pipe(retry(1), catchError(this.handleError));
    }
}
