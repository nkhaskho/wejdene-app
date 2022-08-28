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

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void { }

  search() {
    this.ticketService.getTickets().subscribe(
      res => this.tickets = res
    )
  }

  deleteTicket(id: number) {

  }

}
