import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-merchand-view',
  templateUrl: './merchand-view.page.html',
  styleUrls: ['./merchand-view.page.scss'],
})
export class MerchandViewPage implements OnInit {

  Tickets = [];

  constructor(private router: Router, private ticketServ: TicketService) { }

  ngOnInit() {
    this.Tickets = this.ticketServ.getTickets();
  }






}
