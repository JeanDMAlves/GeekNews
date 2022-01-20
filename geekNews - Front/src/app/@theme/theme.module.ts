import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FeedbackComponent } from "./components/feedback/feedback.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ListActivityCardComponent } from "./components/list-activity-card/list-activity-card.component";
import { HeaderBoxComponent } from "./components/headerBox/header-box.component";
import { MatButtonModule } from "@angular/material/button";
import { ModalComponent } from "./components/modal/modal.component";
import { ModalSuccessfulOperationComponent } from "./components/modal-successful-operation/modal-successful-operation.component";
@NgModule({
    imports: [ReactiveFormsModule, CommonModule, HttpClientModule, MatButtonModule, NgbModule],
    declarations: [ListActivityCardComponent, HeaderBoxComponent, FeedbackComponent, ModalComponent, ModalSuccessfulOperationComponent],
    providers: [NgbActiveModal],
    exports: [ListActivityCardComponent, HeaderBoxComponent, FeedbackComponent, ModalComponent, ModalSuccessfulOperationComponent],
})
export class ThemeModule {}
