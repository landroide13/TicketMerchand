import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperViewPage } from './super-view.page';

const routes: Routes = [
  {
    path: '',
    component: SuperViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperViewPageRoutingModule {}
