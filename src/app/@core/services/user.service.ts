import { Observable } from 'rxjs';
import { IClient } from './../../@theme/interfaces/IClient';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.urlUser;
  constructor(private http: HttpClient) {}
  private httpOptions = {
      headers: new HttpHeaders({
          "Content-Type": "application/json",
      }),
  };

  /**
   * Registra um novo usuário
   * @param user - Novo cliente com email e senha
   * @returns retorna se o usuário foi cadastrado ou não
   */
  public RegisterUser(user: IClient): Observable<IClient> {
    return this.http.post<IClient>(this.url + "users", user, this.httpOptions);
  }

  /**
   * Pega todos os usuários cadastrados
   * @returns uma lista contendo as informações sobre os usuários cadastrados
   */
  public getUsers(): Observable<IClient> {
    return this.http.get<IClient>(this.url + "users", this.httpOptions);
  }

}
