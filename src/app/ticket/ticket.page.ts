import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  Tickets = [];

  constructor(private ticketServ: TicketService, private router: Router) { }

  ngOnInit() {
    this.Tickets = this.ticketServ.getTickets();
  }   

  ionViewWillEnter() {   
    this.Tickets = this.ticketServ.getTickets();
  }

  createTicket(){
    this.router.navigate(['/create-ticket']);
  }



}
