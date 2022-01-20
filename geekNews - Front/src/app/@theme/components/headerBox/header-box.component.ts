import { Component, Input } from "@angular/core";
import { IButton } from "../../interfaces/IButton";

@Component({
    selector: "app-header-box",
    templateUrl: "./header-box.component.html",
    styleUrls: ["./header-box.component.css"],
})
export class HeaderBoxComponent {
    @Input() title: string;
    @Input() button: IButton;
}
