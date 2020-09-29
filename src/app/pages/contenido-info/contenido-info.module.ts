import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoInfoPageRoutingModule } from './contenido-info-routing.module';

import { ContenidoInfoPage } from './contenido-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoInfoPageRoutingModule
  ],
  declarations: [ContenidoInfoPage]
})
export class ContenidoInfoPageModule {}
