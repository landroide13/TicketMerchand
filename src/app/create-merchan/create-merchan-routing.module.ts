import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMerchanPage } from './create-merchan.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMerchanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMerchanPageRoutingModule {}
