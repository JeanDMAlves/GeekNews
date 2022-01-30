import { LocalStorageService } from "./../../../@core/services/local-storage.service";
import { AuthenticationService } from "./../../../@core/services/authentication.service";
import { IClient } from "../../../@theme/interfaces/IClient";
import { Component, ViewChild, TemplateRef } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "src/app/@theme/components/modal/modal.component";
import { UserService } from "src/app/@core/services/user.service";
@Component({
    selector: "app-login-box",
    templateUrl: "./login-box.component.html",
    styleUrls: ["./login-box.component.css"],
})
export class LoginBoxComponent {
    @ViewChild("modalRegisterUser") modalRegisterUser!: TemplateRef<any>;

    public hide: boolean = true;
    public email: FormControl = new FormControl("", [Validators.required, Validators.email]);
    public password: FormControl = new FormControl("");

    public userEmail: FormControl =  new FormControl("", [Validators.required, Validators.email]);
    public userPassword: FormControl = new FormControl("");
    public userPasswordConfirm: FormControl = new FormControl("");
    public registerErrorList: Array<string> = []
    public registeredMember: string = ''

    constructor(
        private login: AuthenticationService,
        private localStorage: LocalStorageService,
        private router: Router,
        private modalService: NgbModal,
        private UserService: UserService,
    ) {}

	public registerNewUser(): any{
		const user: IClient = this.getRegisterData()
		if(user.password && user.email && user.confirmedPassword){
      this.registeredMember = ''
			if(user.password == user.confirmedPassword){
        		this.registerErrorList = []
				this.UserService.RegisterUser({
					email: user.email,
					password: user.password
				}).subscribe((data: any) => {
					if(data['resultado']){
            this.registerErrorList = []
            this.registeredMember = 'Usuário cadastrado com sucesso'
          } else {
            this.addErrorList(data['message'], this.registerErrorList)
          }
				})
			} else {
				let message = 'As senhas não coincidem'
				this.addErrorList(message, this.registerErrorList)
     		}
    	}else {
      		let message = 'Todos os campos devem estar preenchidos'
        	this.addErrorList(message, this.registerErrorList)
    	}
	}

	private addErrorList(message: string, list: Array<string>){
		if(list.filter((data: string) => { return data == message }).length == 0){
		  list.push(message)
		}
	}

	/**
	 * Pega os dados de cadastro do usuário
	 * @returns Um objeto contendo os dados do usuário
	 */
    private getRegisterData(): IClient {
      return {
          email: this.userEmail.value,
          password: this.userPassword.value,
          confirmedPassword: this.userPasswordConfirm.value,
      };
    }

    /**
     * Abre o modal para cadastrar um novo usuário
     */
    public openRegisterUser(): void{
        this.openModals(this.modalRegisterUser, 'Cadastrar novo usuário')
    }

    /**
     * Pega os dados do formulário (email e senha),
     * Verifica se o usuário já está cadastrado no sistema,
     * Se o usuário estiver cadastrado adiciona o Token de Login
     * no LocalStorage e redireciona para a página Home
     */
	public onSubmit(): void {
		const client: IClient = this.getClientData();
		this.login.validateLogin(client).subscribe((data: any) => {
			if(data["status"]){
				this.localStorage.createToken(data["data"]);
				this.router.navigate(["pages/home/Sobre"]);
			}else{
				window.alert('Usuário não está cadastrado')
			}

		});
  	}

    /**
     * Abre um modal
     * @param modalBody - Corpo do modal
     * @param title - Título que será exibido
     * na parte esquerda do header do modal
     */
    private openModals(modalBody: TemplateRef<any>, title?: string): void {
        const openedModal = this.modalService.open(ModalComponent, { size: "xl" });
        openedModal.componentInstance.modalBody = modalBody;
        openedModal.componentInstance.title = title;
    }

    /**
     * Fecha qualquer modal aberto nessa instância do código
     */
    public closeModal(): void {
        this.modalService.dismissAll();
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

    /**
     * Checa as condições do campo e mostra uma mensagem ao usuário caso
     * tenha inserido uma senha muito curta ou tenha deixado o campo vazio.
     *
     * @returns mensagem de alerta ou vazia
     */
    public getPasswordErrorMessage(): string {
        if (this.password.hasError("required")) {
            return "Este campo é obrigatório";
        }
        return this.password.hasError("minlength") ? "Senha muito curta" : "";
    }

    /**
     * Recebe os valores de input do usuário e retorna uma interface
     * do tipo ICliente armazenando os valores
     */
    private getClientData(): IClient {
        return {
            email: this.email.value,
            password: this.password.value,
        };
    }
}
