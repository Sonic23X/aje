import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionesPageRoutingModule } from './devociones-routing.module';

import { DevocionesPage } from './devociones.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DevocionesPage]
})
export class DevocionesPageModule {}
