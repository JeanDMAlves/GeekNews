import { IResultOperation } from "./../../../@theme/interfaces/IResultOperation";
import { IActivities } from "./../../../@theme/interfaces/IActivities";
import { ModalComponent } from "./../../../@theme/components/modal/modal.component";
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { ActivityService } from "src/app/@core/services/activity.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IButton } from "src/app/@theme/interfaces/IButton";
import { IData } from "src/app/@theme/interfaces/IData";
import { IModal } from "src/app/@theme/interfaces/IModal";
@Component({
    selector: "app-activities",
    templateUrl: "./activities.component.html",
    styleUrls: ["./activities.component.css"],
})
export class ActivitiesComponent implements OnInit {
    @ViewChild("modalBody") modalBody: TemplateRef<any>;
    @ViewChild("modalUpdateElement") modalUpdateElement: TemplateRef<any>;
    @ViewChild("modalRegisterSuccessful") modalRegisterSuccessful: TemplateRef<any>;
    @ViewChild("modalUpdateSuccessful") modalUpdateSuccessful: TemplateRef<any>;
    @ViewChild("modalDelete") modalDelete: TemplateRef<any>;
    @ViewChild("modalDeleteSuccessful") modalDeleteSuccessful: TemplateRef<any>;

    public title: string = "Atividades";
    public headerBoxButton: IButton;
    public activitiesList: IData[] = [];
    private updateId: string;
    private itemParent: any;

    constructor(private activities: ActivityService, private modalService: NgbModal) {}

    public buttons: IButton[] = [
        {
            label: "Excluir",
            class: "orange-button",
            action: (parent: any): void => {
                this.itemParent = parent;
                this.openModals(this.modalDelete, "");
            },
        },
        {
            label: "Editar",
            class: "light-green-button",
            action: (parent: any): void => {
                this.updateId = parent.id;
                this.openModals(this.modalUpdateElement, "Editar Atividade");
            },
        },
    ];

    public modalUpdateElementData: IModal = {
        title: "Altere os dados abaixo para editar uma atividade no RIOTT",
        label: "Descrição da atividade",
        buttons: [
            {
                label: "Salvar edição",
                class: "dark-green-button register-activity-add-button",
                action: (activity: IActivities): void => {
                    const item = this.activitiesList.find((item) => item.id == this.updateId);
                    item.value = activity.description;
                    this.activities.putActivity(this.updateId, activity.description).subscribe(() => {
                        this.modalService.dismissAll();
                        this.openModals(this.modalUpdateSuccessful, "");
                    });
                },
            },
            {
                label: "Cancelar",
                class: "orange-button",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalData: IModal = {
        title: "Insira os dados abaixo para cadastrar uma nova atividade ao RIOTT",
        label: "Descrição da atividade",
        buttons: [
            {
                label: "Adicionar atividade",
                class: "dark-green-button register-activity-add-button",
                action: (activity: IActivities): void => {
                    this.activities.postActivity(activity).subscribe(() => {
                        this.activitiesList.push({
                            title: "Descrição da atividade",
                            value: activity.description,
                        });
                        this.modalService.dismissAll();
                        this.openModals(this.modalRegisterSuccessful, "");
                    });
                },
            },
            {
                label: "Cancelar",
                class: "orange-button",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalRegisterSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Atividade adicionada com sucesso!",
        buttons: [
            {
                label: "Finalizar",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalUpdateSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Atividade editada com sucesso!",
        buttons: [
            {
                label: "Finalizar",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalDeleteData: IResultOperation = {
        img: "../../../../assets/Warning.png",
        message: "Deseja realmente excluir essa atividade",
        buttons: [
            {
                label: "Confirmar e excluir a atividade",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.activities.deleteActivityById(this.itemParent.id).subscribe(() => {
                        this.modalService.dismissAll();
                        this.openModals(this.modalDeleteSuccessful, "");
                        this.itemParent.remove();
                    });
                },
            },
            {
                label: "Cancelar",
                class: "orange-button modalResultOperationButton",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

    public modalDeleteSuccessfulData: IResultOperation = {
        img: "../../../../assets/Successful.png",
        message: "Atividade excluída com sucesso!",
        buttons: [
            {
                label: "Finalizar",
                class: "dark-green-button modalResultOperationButton",
                action: (): void => {
                    this.modalService.dismissAll();
                },
            },
        ],
    };

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
     * Lista todas as atividades existentes na lista de atividades
     * e exibe elas na tela através do componente ListActivityCard
     */
    public ngOnInit(): void {
        this.headerBoxButton = {
            label: "Cadastrar nova atividade",
            class: "dark-green-button",
            action: (): void => {
                this.openModals(this.modalBody, "Cadastrar nova atividade");
            },
        };

        this.activities.getActivities(1, 100, 1, "ASC").subscribe((dataStorage) => {
            const data = dataStorage["data"]["rows"];
            for (const activity of data) {
                const item = {
                    title: "Descrição da atividade",
                    value: activity.description,
                    id: activity.id,
                };
                this.activitiesList.push(item);
            }
        });
    }
}
