import { Component, Input } from "@angular/core";
import { IButton } from "../../interfaces/IButton";
import { IData } from "../../interfaces/IData";

@Component({
    selector: "app-list-activity-card",
    templateUrl: "./list-activity-card.component.html",
    styleUrls: ["./list-activity-card.component.css"],
})
export class ListActivityCardComponent {
    @Input() data: IData;
    @Input() buttons: IButton[];
    @Input() image: string;
    @Input() status: "editable" | "readonly";
}
