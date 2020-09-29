import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioModalPageRoutingModule } from './formulario-modal-routing.module';

import { FormularioModalPage } from './formulario-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioModalPageRoutingModule
  ],
  declarations: [FormularioModalPage]
})
export class FormularioModalPageModule {}
