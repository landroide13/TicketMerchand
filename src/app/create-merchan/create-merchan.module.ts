import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMerchanPageRoutingModule } from './create-merchan-routing.module';

import { CreateMerchanPage } from './create-merchan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMerchanPageRoutingModule
  ],
  declarations: [CreateMerchanPage]
})
export class CreateMerchanPageModule {}
