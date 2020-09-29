import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioModalPage } from './formulario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioModalPageRoutingModule {}
