import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientHeaderComponent} from "./client-header/client-header.component";
import {SharedComponent} from "./shared.component";
import {ClientFooterComponent} from "./client-footer/client-footer.component";
import {RouterModule} from "@angular/router";
import {LoadingComponent} from "./loading/loading.component";
import {ModalComponent} from "./modal/modal.component";

@NgModule({
  declarations: [ClientHeaderComponent, ClientFooterComponent, SharedComponent, LoadingComponent, ModalComponent],
    exports: [ClientHeaderComponent, ClientFooterComponent, ModalComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
