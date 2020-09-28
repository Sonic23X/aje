import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionesPage } from './devociones.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevocionesPageRoutingModule {}
