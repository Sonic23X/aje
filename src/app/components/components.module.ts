import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';



@NgModule({
  declarations: [
    MenuButtonsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuButtonsComponent,
  ]
})
export class ComponentsModule { }
