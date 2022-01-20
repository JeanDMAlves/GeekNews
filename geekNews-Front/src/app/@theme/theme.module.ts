import { ModalComponent } from './components/modal/modal.component';
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { ModalSuccessfulOperationComponent } from './components/modal-successful-operation/modal-successful-operation.component';
@NgModule({
    imports: [ReactiveFormsModule, CommonModule, HttpClientModule, MatButtonModule, NgbModule],
    declarations: [
        ModalComponent,
        ModalSuccessfulOperationComponent
    ],
    providers: [NgbActiveModal],
    exports: [
        ModalComponent,
        ModalSuccessfulOperationComponent
    ],
})
export class ThemeModule {}