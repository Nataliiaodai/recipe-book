import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent,
    ],
    imports: [
        FormsModule, 
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent},
        ]),
        SharedModule,
        ReactiveFormsModule, 
    ],
    // providers: [LoggingService]
})

export class ShoppingModule {

}