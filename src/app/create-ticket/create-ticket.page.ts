import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Merchandiser } from '../merchandiser/merchandiser.model';
import { MerchandiserService } from '../merchandiser/merchandiser.service';
import { StoreServiceService } from '../store/store-service.service';
import { Store } from '../store/store.model';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.page.html',
  styleUrls: ['./create-ticket.page.scss'],
})
export class CreateTicketPage implements OnInit {

  Stores = [];
  Merch = [];

  seletedStore: Store;
  selectedMerchandiser: Merchandiser;

  constructor(private ticketServ: TicketService, private router: Router,
              private storeServ: StoreServiceService, private merServ: MerchandiserService) { }

  ngOnInit() {
    this.Stores =  this.storeServ.getStores();
    this.Merch = this.merServ.getMerchandisers();
  }
  
  displaySto(){
    this.Stores =  this.storeServ.getStores();
  }

  displayMer(){
    this.Merch = this.merServ.getMerchandisers();
  }

  createTicket(title, address, store, merchandiser){
    this.ticketServ.addTicket(title.value, address.value, store.value, merchandiser.value);
    this.router.navigate(['/ticket'])
  }
}
