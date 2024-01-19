import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAnuncioPageRoutingModule } from './detalle-anuncio-routing.module';

import { DetalleAnuncioPage } from './detalle-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAnuncioPageRoutingModule
  ],
  declarations: [DetalleAnuncioPage]
})
export class DetalleAnuncioPageModule {}
