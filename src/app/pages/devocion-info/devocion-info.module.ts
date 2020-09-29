import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevocionInfoPageRoutingModule } from './devocion-info-routing.module';

import { DevocionInfoPage } from './devocion-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevocionInfoPageRoutingModule
  ],
  declarations: [DevocionInfoPage]
})
export class DevocionInfoPageModule {}
