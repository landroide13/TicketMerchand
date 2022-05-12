import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreServiceService } from '../store/store-service.service';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.page.html',
  styleUrls: ['./create-store.page.scss'],
})
export class CreateStorePage implements OnInit {

  constructor(private storeServ: StoreServiceService, private route: Router) { }

  ngOnInit() {
  }

  createStore(name, addr, contact){
    this.storeServ.addStore(name.value, addr.value, contact.value)
    this.route.navigate(['/store'])
  }

}
