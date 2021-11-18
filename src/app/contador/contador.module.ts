import { NgModule } from '@angular/core';
import { ContadorComponet } from './contador/contador.component';



@NgModule({
    declarations: [
        ContadorComponet
    ],
    // Cosas publicas fuera del modulo
    exports: [
        ContadorComponet
    ]
})
export class ContadorModule{}