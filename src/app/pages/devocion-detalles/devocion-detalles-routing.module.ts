import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionDetallesPage } from './devocion-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevocionDetallesPageRoutingModule {}
