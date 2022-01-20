import { Observable } from "rxjs";
import { IActivities } from "../../@theme/interfaces/IActivities";
import { LocalStorageService } from "./local-storage.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class ActivityService {
    private url: string = `${environment.apiURL}/task`;
    private token: string = this.localStorage.readToken();
    constructor(private http: HttpClient, private localStorage: LocalStorageService) {}
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.token}`,
        }),
    };

    /**
     * Lista todas as atividades cadastradas no sistema
     * @param page - Número da página
     * @param size - Quantidade de Itens
     * @param order - Chave para ordenar
     * @param orderBy - Direção da ordenação (asc ou desc)
     * @returns retorna um Observable de IActivities
     * que listará as atividades quando a requisição for concluída
     */
    public getActivities(page: number, size: number, order: number, orderBy: string = "ASC"): Observable<IActivities> {
        return this.http.get<IActivities>(`${this.url}?page=${page}&size=${size}&order=${order}&orderBy=${orderBy}`, this.httpOptions);
    }

    /**
     * Adiciona uma atividade na lista de atividades
     * cadastradas no sistema
     * @param activity - Atividade que irá ser cadastrada
     * @returns retorna se a atividade foi cadastrada com sucesso
     */
    public postActivity(activity: IActivities): Observable<IActivities> {
        return this.http.post<IActivities>(this.url, activity, this.httpOptions);
    }

    /**
     * Altera a descrição de uma atividade através de seu id
     * @param taskId - id da atividade
     * @param newDescription - nova descrição da atividade
     * @returns um observable que informa se a atividade
     * foi alterada com sucesso
     */
    public putActivity(taskId: string, newDescription: string): Observable<IActivities> {
        const newActivityDescription: IActivities = {
            id: taskId,
            description: newDescription,
        };
        return this.http.put<IActivities>(this.url, newActivityDescription, this.httpOptions);
    }

    /**
     * Retorna uma atividade através de seu id
     * @param id - id da atividade
     * @returns Um observable que monitorará a requisição,
     * caso seja bem sucedida retornará a atividade
     */
    public getActivityById(id: string): Observable<IActivities> {
        return this.http.get<IActivities>(this.url + `/${id}`, this.httpOptions);
    }

    /**
     * Deleta uma atividade a partir do seu id
     * @param id - id da atividade
     * @returns Um observable que informa se a atividade
     * foi excluída com sucesso
     */
    public deleteActivityById(id: string): Observable<IActivities> {
        return this.http.delete<IActivities>(this.url + `/${id}`, this.httpOptions);
    }
}
