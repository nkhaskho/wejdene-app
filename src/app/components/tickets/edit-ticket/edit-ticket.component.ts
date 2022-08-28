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

  constructor() { }

  ngOnInit(): void {
  }

  save() {}

}
