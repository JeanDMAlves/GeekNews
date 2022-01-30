import { IMessage } from './../../@theme/interfaces/IMessage';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url: string = environment.urlUser;
  constructor(private http: HttpClient) {}
  private httpOptions = {
      headers: new HttpHeaders({
          "Content-Type": "application/json",
      }),
  };

  postMessage(mensagem: IMessage){
    return this.http.post(this.url + "message", mensagem, this.httpOptions);
  }

}
