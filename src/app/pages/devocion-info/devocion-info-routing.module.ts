import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevocionInfoPage } from './devocion-info.page';

const routes: Routes = [
  {
    path: '',
    component: DevocionInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevocionInfoPageRoutingModule {}
