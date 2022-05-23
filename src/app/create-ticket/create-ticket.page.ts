import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Merchandiser } from '../merchandiser/merchandiser.model';
import { MerchandiserService } from '../merchandiser/merchandiser.service';
import { StoreServiceService } from '../store/store-service.service';
import { Store } from '../store/store.model';
import { TicketService } from '../ticket/ticket.service';

import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.page.html',
  styleUrls: ['./create-ticket.page.scss'],
})
export class CreateTicketPage implements OnInit {

  Stores = [];
  Merch = [];

  ticketForm: FormGroup;

  seletedStore: Store;
  selectedMerchandiser: Merchandiser;

  constructor(private ticketServ: TicketService, private router: Router, public formBuilder: FormBuilder,
              private storeServ: StoreServiceService, private merServ: MerchandiserService) { }

  ngOnInit() {
    this.Stores =  this.storeServ.getStores();
    this.Merch = this.merServ.getMerchandisers();

    this.ticketForm = this.formBuilder.group({
      title: [''],
      address: [''],
      store: [''],
      merchandiser: [''],
   })
  }

  onSubmit(){ 
    console.log(this.ticketForm.value);
    this.ticketServ.addTicket(this.ticketForm.value.title,this.ticketForm.value.address, this.ticketForm.value.store, this.ticketForm.value.merchandiser);
    this.router.navigate(['/ticket'])
  }
  
}
