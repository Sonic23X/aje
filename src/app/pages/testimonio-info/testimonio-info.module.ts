import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimonioInfoPageRoutingModule } from './testimonio-info-routing.module';

import { TestimonioInfoPage } from './testimonio-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimonioInfoPageRoutingModule
  ],
  declarations: [TestimonioInfoPage]
})
export class TestimonioInfoPageModule {}
