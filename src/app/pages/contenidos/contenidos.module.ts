import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidosPageRoutingModule } from './contenidos-routing.module';

import { ContenidosPage } from './contenidos.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ContenidosPage]
})
export class ContenidosPageModule {}
