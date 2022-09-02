import { ActivatedRoute } from '@angular/router';
import { TicketService } from './../../../services/ticket/ticket.service';
import { FormResponse } from './../../../models/form-response';
import { Ticket } from './../../../models/ticket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss']
})
export class EditTicketComponent implements OnInit {

  formResponse = new FormResponse();

  ticket = new Ticket();

  constructor(private ticketService: TicketService,
              private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    let ticketId = await this.activatedRoute.snapshot.params['id'] || '0'
    if (parseInt(ticketId) > 0) {
      await this.ticketService.getTicketById(parseInt(ticketId)).subscribe(
        res => this.ticket = res
      )
    }
  }

  save() {
    if (this.ticket.id == 0) {
      // add new ticket
      this.ticket.createdBy = parseInt(localStorage.getItem('id') || '0')
      this.ticketService.addTicket(this.ticket).subscribe(
        res => {
          this.ticket = new Ticket();
          this.formResponse.setMessage('Saved successfully.')
        },
        err => this.formResponse.setError('Could not add ticket')
      )
    } else { // update existing
      this.ticketService.updateTicket(this.ticket).subscribe(
        res => {
          this.ticket = res;
          this.formResponse.setMessage('Updated successfully.')
        },
        err => this.formResponse.setError('Could not update ticket')
      )
    }
  }

}
