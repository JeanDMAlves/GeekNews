import { Input, Component, TemplateRef } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
    @Input() title: string;
    @Input() modalBody: TemplateRef<any>;

    constructor(public activeModal: NgbActiveModal) {}
}
