import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonioInfoPage } from './testimonio-info.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonioInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonioInfoPageRoutingModule {}
