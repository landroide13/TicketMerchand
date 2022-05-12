import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerchanDetailPageRoutingModule } from './merchan-detail-routing.module';

import { MerchanDetailPage } from './merchan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerchanDetailPageRoutingModule
  ],
  declarations: [MerchanDetailPage]
})
export class MerchanDetailPageModule {}
