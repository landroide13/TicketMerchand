import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'super-view',
    loadChildren: () => import('./super-view/super-view.module').then( m => m.SuperViewPageModule)
  },
  {
    path: 'merchand-view',
    loadChildren: () => import('./merchand-view/merchand-view.module').then( m => m.MerchandViewPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'store',
    children:[
      {
       path:'',
       loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
      },
      {
        path:':storeId',
        loadChildren: () => import('./store-detail/store-detail.module').then( m => m.StoreDetailPageModule)
      }
    ]
  },
  {
    path: 'merchandiser',
    children: [
      {
        path: '',
        loadChildren: () => import('./merchandiser/merchandiser.module').then( m => m.MerchandiserPageModule)
      },
      {
        path: ':merchanId',
        loadChildren: () => import('./merchan-detail/merchan-detail.module').then( m => m.MerchanDetailPageModule)
      },
    ]
  },
  {
    path: 'create-store',
    loadChildren: () => import('./create-store/create-store.module').then( m => m.CreateStorePageModule)
  },
  {
    path: 'create-merchan',
    loadChildren: () => import('./create-merchan/create-merchan.module').then( m => m.CreateMerchanPageModule)
  },
  {
    path: 'create-ticket',
    loadChildren: () => import('./create-ticket/create-ticket.module').then( m => m.CreateTicketPageModule)
  },
  {
    path: 'ticket-detail',
    loadChildren: () => import('./ticket-detail/ticket-detail.module').then( m => m.TicketDetailPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
