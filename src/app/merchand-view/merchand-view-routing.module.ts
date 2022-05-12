import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchandViewPage } from './merchand-view.page';

const routes: Routes = [
  {
    path: '',
    component: MerchandViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchandViewPageRoutingModule {}
