import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionDetallesPageRoutingModule } from './devocion-detalles-routing.module';

import { DevocionDetallesPage } from './devocion-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionDetallesPageRoutingModule
  ],
  declarations: [DevocionDetallesPage]
})
export class DevocionDetallesPageModule {}
