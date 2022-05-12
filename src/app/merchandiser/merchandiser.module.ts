import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchandiserPageRoutingModule } from './merchandiser-routing.module';

import { MerchandiserPage } from './merchandiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchandiserPageRoutingModule
  ],
  declarations: [MerchandiserPage]
})
export class MerchandiserPageModule {}
