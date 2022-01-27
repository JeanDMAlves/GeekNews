import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {
  private url: string = environment.urlUser;
  constructor(private http: HttpClient) {}
  private httpOptions = {
      headers: new HttpHeaders({
          "Content-Type": "application/json",
      }),
  };

  public recoverPassword(user: {email: string}){
    return this.http.post(this.url + "recover", user, this.httpOptions);
  }
}
