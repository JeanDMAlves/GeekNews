import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  public email: FormControl = new FormControl("", [Validators.required, Validators.email]);


  public onSubmit(){
    console.log('AAAA')
  }

  /**
       * Checa as condições do campo e mostra uma mensagem ao usuário caso
       * tenha inserido um email inválido ou tenha deixado o campo vazio.
       *
       * @returns mensagem de alerta ou vazia
       */
  public getEmailErrorMessage(): string {
    if (this.email.hasError("required")) {
        return "Este campo é obrigatório";
    }
    return this.email.hasError("email") ? "Digite um email válido" : "";
  }
}
