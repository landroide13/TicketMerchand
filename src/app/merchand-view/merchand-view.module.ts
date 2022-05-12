import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchandViewPageRoutingModule } from './merchand-view-routing.module';

import { MerchandViewPage } from './merchand-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchandViewPageRoutingModule
  ],
  declarations: [MerchandViewPage]
})
export class MerchandViewPageModule {}
