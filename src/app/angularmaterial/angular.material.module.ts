import { NgModule } from '@angular/core';
import {
    MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdRadioModule, MdDatepickerModule, MdListModule, MdIconModule,
    MdCardModule, MdProgressSpinnerModule, MdDialogModule
} from '@angular/material';


@NgModule({
    imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdRadioModule, MdDatepickerModule, MdListModule, MdIconModule, MdCardModule,
        MdProgressSpinnerModule, MdDialogModule],
    exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdRadioModule, MdDatepickerModule, MdListModule, MdIconModule, MdCardModule,
        MdProgressSpinnerModule, MdDialogModule]
})
export class MyOwnCustomMaterialModule { }
