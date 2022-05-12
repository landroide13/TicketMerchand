import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchanDetailPage } from './merchan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MerchanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchanDetailPageRoutingModule {}
