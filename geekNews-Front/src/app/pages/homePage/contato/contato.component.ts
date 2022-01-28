import { IMessage } from './../../../@theme/interfaces/IMessage';
import { MessageService } from './../../../@core/services/message.service';
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
  public resultado_mensagem: string = ""

  constructor(private messageService: MessageService){}

  public getData(): IMessage{
    return {
      name: this.nome.value,
      phone: this.telefone.value,
      message: this.mensagem.value,
    }
  }

  public onSubmit(){
    this.messageService.postMessage(this.getData()).subscribe((data: any) => {
      this.resultado_mensagem = data['result']
      this.limpaCampos()
    })
  }

  private limpaCampos(): void{
    this.nome.reset()
    this.telefone.reset()
    this.mensagem.reset()
  }
}
