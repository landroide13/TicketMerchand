import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private Tickets: Ticket[] = [
    {id: 1, title: 'Lego Stand', address:'Willis St.', store: 'NW', merch: 'Tom', comments: ''},
    {id: 2, title: 'Green Medows', address:'Lambton Quy', store: 'ContDown', merch: 'Byron', comments: ''},
    {id: 3, title: 'Havanna Coffee', address:'Fetherstone St.', store: 'JBHifi', merch: 'sheldon', comments: ''},
  ]

  constructor() { }

  getTickets(){
    return [...this.Tickets]
  }

  getTicket(id: number){
    return {
      ...this.Tickets.find(tic => {
        return tic.id === id
      })
    }
  }

  deleteTicket(id: number){
    this.Tickets = this.Tickets.filter(mer => {
      return mer.id !== id 
    })
    console.log('Deleted !')
  }

  addTicket(title: string, address: string, store: string, merch: string, comments?: string){
    this.Tickets.push({
      id: this.Tickets.length + 1,
      title,
      address,
      store,
      merch,
      comments
    })
    console.log(this.Tickets);
  }



}
