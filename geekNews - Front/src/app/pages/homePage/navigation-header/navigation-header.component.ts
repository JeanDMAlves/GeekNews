import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-navigation-header",
    templateUrl: "./navigation-header.component.html",
    styleUrls: ["./navigation-header.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class NavigationHeaderComponent {
    @Input() tabLinks: any[] = [];
}
