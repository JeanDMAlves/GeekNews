import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  public nome: FormControl = new FormControl("");
  public telefone: FormControl = new FormControl("");
  public mensagem: FormControl = new FormControl("");

  public getData(){
    return {
      nome: this.nome.value,
      telefone: this.telefone.value,
      mensagem: this.mensagem.value,
    }
  }

  public onSubmit(){
    console.log(this.getData())
  }
}
