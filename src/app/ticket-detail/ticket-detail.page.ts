import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Ticket } from '../ticket/ticket.model';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {

  ticket: Ticket;

  constructor(private acRoute: ActivatedRoute, private alertCtr: AlertController,
              private ticketServ: TicketService, private router: Router ) { }

  ngOnInit() { 
    this.acRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('ticketId');
      this.ticket = this.ticketServ.getTicket(Number(id))
    })
  }

 async deleteStore(){
    const alertEle = await this.alertCtr.create({
      header: "Are you sure, you want delete it ?",
      buttons:[
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.ticketServ.deleteTicket(Number(this.ticket.id))
            console.log('Deleted !')
            this.router.navigate(['/ticket'])
          }
        }
      ]
    })
   await alertEle.present();
  }
       
}
