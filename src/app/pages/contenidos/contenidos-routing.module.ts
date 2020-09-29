import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidosPage } from './contenidos.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidosPageRoutingModule {}
