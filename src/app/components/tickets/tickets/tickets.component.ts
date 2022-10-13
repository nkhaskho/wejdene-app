import { TicketService } from './../../../services/ticket/ticket.service';
import { Ticket } from './../../../models/ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = [];
  priority: string = "";
  status: string = "";
  search: string = "";
  appStorage = localStorage ;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void { }

  searchTickets() {
    this.ticketService.getTickets(this.search, this.priority, this.status).subscribe(
      res => this.tickets = res
    )
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe(
      res => this.searchTickets()
    )
  }

}
