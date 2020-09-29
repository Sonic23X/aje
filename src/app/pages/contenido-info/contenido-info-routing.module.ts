import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoInfoPage } from './contenido-info.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidoInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoInfoPageRoutingModule {}
