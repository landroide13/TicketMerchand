import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperViewPageRoutingModule } from './super-view-routing.module';

import { SuperViewPage } from './super-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperViewPageRoutingModule
  ],
  declarations: [SuperViewPage]
})
export class SuperViewPageModule {}
