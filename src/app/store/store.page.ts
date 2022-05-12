import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreServiceService } from './store-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  Stores = [];

  constructor(private storeServ: StoreServiceService, private router: Router) { }

  ngOnInit() {
    this.Stores = this.storeServ.getStores();
  }

  ionViewWillEnter() {
    this.Stores = this.storeServ.getStores();
  }

  createStore(){
    this.router.navigate(['/create-store']);
  }
 


}
