import { IUser } from "../../@theme/interfaces/IUser";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private url: string = `${environment.apiURL}/user`;
    private token: string = this.localStorage.readToken();
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
        }),
    };

    /**
     * Lista os usuários cadastrados no sistema
     * @param page - Número da página
     * @param size - Quantidade de itens
     * @param order - Chave para ordenar
     * @param orderBy - Direção da ordenação
     * @returns retorna um Observable de IUser
     * que listará os usuários quando a requisição for concluída
     */
    public getUsers(page: number, size: number, order: number, orderBy: string = "ASC"): Observable<IUser> {
        return this.http.get<IUser>(`${this.url}?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}`, this.httpOptions);
    }

    /**
     * Adiciona um usuário na lista de usuários
     * cadastradas no sistema
     * @param newUser - Usuário que será cadastrado
     * @returns retorna se o usuário foi cadastrado com sucesso
     */
    public postUser(newUser: IUser): Observable<IUser> {
        return this.http.post<IUser>(this.url, newUser, this.httpOptions);
    }

    /**
     * Altera os dados de um usuário através do id
     * @param userId - id da atividade
     * @param email - novo email do usuário
     * @param password - nova senha do usuário
     * @returns um observable que informa se o usuário
     * foi alterado com sucesso
     */
    public putUser(userId: string, email: string, password: string): Observable<IUser> {
        const alteredUser: IUser = {
            id: userId,
            email: email,
            password: password,
        };
        return this.http.put<IUser>(this.url, alteredUser, this.httpOptions);
    }

    /**
     * Retorna um usuário através de seu id
     * @param id - id do usuário
     * @returns Um observable que monitorará a requisição,
     * caso seja bem sucedida retornará o usuário
     */
    public getUserById(id: string): Observable<IUser> {
        return this.http.get<IUser>(this.url + `/${id}`, this.httpOptions);
    }

    /**
     * Deleta um usuário a partir do seu id
     * @param id - id da atividade
     * @returns Um observable que informa se o usuário
     * foi excluído com sucesso
     */
    public deleteUserById(id: string): Observable<IUser> {
        return this.http.delete<IUser>(this.url + `/${id}`, this.httpOptions);
    }
}
