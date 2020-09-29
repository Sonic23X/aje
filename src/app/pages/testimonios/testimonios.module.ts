import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimoniosPageRoutingModule } from './testimonios-routing.module';

import { TestimoniosPage } from './testimonios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimoniosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TestimoniosPage]
})
export class TestimoniosPageModule {}
