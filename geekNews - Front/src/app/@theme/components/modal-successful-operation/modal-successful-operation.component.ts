import { IResultOperation } from "./../../interfaces/IResultOperation";
import { Input } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector: "app-modal-successful-operation",
    templateUrl: "./modal-successful-operation.component.html",
    styleUrls: ["./modal-successful-operation.component.css"],
})
export class ModalSuccessfulOperationComponent {
    @Input() propsOperation: IResultOperation;
}
